import { Component, OnInit, ElementRef, Input, Directive, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IRecipe }    from './recipe';
import { RecipeService } from './recipe.service';
import { PictureService } from '../shared/pictures.service';
import { RecipesListComponent } from './recipes-list.component';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Ng2FileDropRejectedFile, Ng2FileDropAcceptedFile, Ng2FileDropRejections}  from 'ng2-file-drop';

const URL = 'http://gastro.dev:3000/api/upload';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})

export class RecipeFormComponent implements OnInit {
  public coverUploader:FileUploader = new FileUploader({url: URL, itemAlias:"cover"});
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias:"gallery"});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  errorMessage: string;
  recipes: IRecipe[];
  model = {
    id: 1,
    title: '',
    description: '',
    cookingTime: ''
  };

  @ViewChild('recipeForm') recipeForm: FormGroup;
  private formStatus: boolean;
  private addedRecipe = {};
  private uploadCoverDone:boolean = true;
  private uploadAllImgDone:boolean = true;

  ngOnInit() {
    this.recipeFormBtn();
  }

  constructor(private _recipeService: RecipeService, private http: Http, private el: ElementRef, private _picturesService: PictureService, private _recipeListComp:RecipesListComponent ){ }

  onSubmit(): void {
    event.preventDefault();
    this._recipeService.addRecipe(this.model)
      .subscribe( recipe => {
        this.addedRecipe = recipe;

        if (this.coverUploader.queue.length > 0) {
          this.uploadCoverDone = false;
          this.customUploader(this.coverUploader, true);
        }

        if (this.uploader.queue.length > 0) {
          this.uploadAllImgDone = false;
          this.customUploader(this.uploader, false);
        }
      },
      error => this.errorMessage = <any>error );

      this._recipeListComp.listReceipes();
      document.getElementById('addRecipeForm').classList.toggle('hideForm');

  }

  private customUploader(myUploader, isCover) {
    let pictureReq = {};
    let pic = [];
    if (myUploader.queue.length > 0) {
      myUploader.uploadAll();
      myUploader.onCompleteItem = (item, response, status, header) => {
        if (status === 200) {
          let resp = JSON.parse(response);
          let picturesDetails = resp[Object.keys(resp)[0]][0];
          pictureReq = {
            "recipe_id": this.addedRecipe['id'],
            'is_cover': picturesDetails['fieldname'] == 'cover' ? 1 : 0,
            "path": picturesDetails['filename']
          }
          this._picturesService.addPicture(pictureReq);
          if(isCover) {
            this.uploadCoverDone = true;
          } else {
            this.uploadAllImgDone = true;
          }
        }
        this._recipeListComp.listReceipes();
      }
    }
  }

  private resetForm() {
    this.recipeForm.reset();
    if (this.coverUploader.queue.length > 0 )
      this.coverUploader.clearQueue();
     if (this.uploader.queue.length > 0 )
      this.uploader.clearQueue();
  }

  private recipeFormBtn() {
    let that = this;
    document.getElementById("showForm").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById('addRecipeForm').classList.toggle('closed');
        that.resetForm();
    });
  }
}


