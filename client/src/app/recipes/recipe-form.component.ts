import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { IRecipe }    from './recipe';
import { RecipeService } from './recipe.service';

// import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const URL = 'http://gastro.dev:3000/api/upload';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html'
})
export class RecipeFormComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
    //This is the default title property created by the angular cli. Its responsible for the app works
  title = 'app works!';


  listFilter: string;
  errorMessage: string;
  recipes: IRecipe[];
  model = {
    id: 1,
    title: '',
    description: '',
    cookingTime: '',
    coverImage: ''
  };

  submitted = false;

  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false };
    //overide the onCompleteItem property of the uploader so we are
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
    console.log("ImageUpload:uploaded:", item, status, response);


    this.model.coverImage = response ;


    this._recipeService.addRecipe(this.model)
    .subscribe(recipe => this.model,
               error => this.errorMessage = <any>error);

    };
  }

  constructor(public fb: FormBuilder, private _recipeService: RecipeService, private http: Http, private el: ElementRef){}

  onSubmit(): void {
    // this._recipeService.addRecipe(this.model)
    // .subscribe(recipe => this.model,
    //            error => this.errorMessage = <any>error);
  }

  upload() {
    //locate the file element meant for the file upload.
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
        let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('photo', inputEl.files.item(0));
            //call the angular http method
            this.http
        //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
                .post(URL, formData).map((res:Response) => res.json()).subscribe(
                //map the success function and alert the response
                 (success) => {
                         alert(success._body);
                },
                (error) => alert(error))
          }
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  showFormControls(form: any) {
    return form;
  }
}


