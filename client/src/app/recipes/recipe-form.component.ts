import { Component, OnInit, ElementRef, Input, Directive, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IRecipe }    from './recipe';
import { RecipeService } from './recipe.service';
import { PictureService } from '../shared/pictures.service';
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

  submitted = false;

  ngOnInit() {
    //this.myForm.valueChanges.subscribe(v => this.formStatus = this.myForm.dirty);
  }

  constructor(private _recipeService: RecipeService, private http: Http, private el: ElementRef, private _picturesService: PictureService){}

  onSubmit(): void {
    event.preventDefault();
    this._recipeService.addRecipe(this.model)
      .subscribe( recipe => {
        this.addedRecipe = recipe;
        this.curstomUploader(this.coverUploader);
        this.curstomUploader(this.uploader);
      },
      error => this.errorMessage = <any>error );
      this.resetForm();
  }

  public curstomUploader(myUploader) {
    if (myUploader.queue.length > 0) {
      myUploader.uploadAll();
      myUploader.onCompleteItem = (item, response, status, header) => {
        if (status === 200) {
          let resp = JSON.parse(response);
          let picturesDetails = resp[Object.keys(resp)[0]][0];
          let pictureReq = {
            "recipe_id": this.addedRecipe['id'],
            'is_cover': picturesDetails['fieldname'] == 'cover' ? 1 : 0,
            "path": picturesDetails['filename']
          }
          this._picturesService.addPicture(pictureReq);
        }
      }
    }
  }

  resetForm() {
    this.recipeForm.reset();
    if (this.coverUploader.queue.length > 0 )
      this.coverUploader.clearQueue();
     if (this.uploader.queue.length > 0 )
      this.uploader.clearQueue();
  }
}


