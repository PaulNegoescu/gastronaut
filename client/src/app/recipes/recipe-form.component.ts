import { Component, OnInit, ElementRef, Input, Directive } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { IRecipe }    from './recipe';
import { RecipeService } from './recipe.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Ng2FileDropRejectedFile, Ng2FileDropAcceptedFile, Ng2FileDropRejections}  from 'ng2-file-drop';




const URL = 'http://gastro.dev:3000/api/upload';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html'
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

  submitted = false;

  ngOnInit() {
    if (this.coverUploader.queue.length > 0) {
        this.coverUploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
        this.coverUploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
          console.log('raspuns: ', response);
        }
    }

    if (this.uploader.queue.length > 0) {
      this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        console.log('raspuns: ', response);
      }
    }
  }

  constructor(private _recipeService: RecipeService, private http: Http, private el: ElementRef){}

  onSubmit(): void {
    console.log('model: ',this.model);
    console.log('uploader: ',this.uploader);
    console.log('coverUploader: ',this.coverUploader);

    if (this.coverUploader.queue.length > 0) {
      this.coverUploader.uploadAll();
    }

    if (this.uploader.queue.length > 0) {
      this.uploader.uploadAll();
    }

    this._recipeService.addRecipe(this.model)
    .subscribe(recipe => this.model,
               error => this.errorMessage = <any>error);
  }

  showFormControls(form: any) {
    return form;
  }
}


