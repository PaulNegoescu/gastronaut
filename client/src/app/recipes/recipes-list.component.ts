import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';
import { PictureService } from '../shared/pictures.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bb-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: [ './recipes-list.component.scss'],
  providers: [RecipeService, PictureService]
})
export class RecipesListComponent implements OnInit {
  pageTitle: string = "Lista retete";
  //listFilter: string;
  errorMessage: string;
  recipes: IRecipe[];
  pictures;

  /** Pagination */
  p: number = 1;
  collection: any[];

  constructor(public fb: FormBuilder, private _recipeService: RecipeService, private _pictureService: PictureService) {  }

  ngOnInit(): void {
    this.listReceipes();
  }

  removeRecipe(id) {
    var txt;
    if (confirm("Sterge reteta") == true) {
        this._recipeService.deleteRecipe(id).subscribe(value => {
          if (value) {
            this.listReceipes();
            return true;
          }
        });
    }
  }

  public listReceipes() {
    this._recipeService.getRecipes()
    .subscribe(recipes => {
      this.recipes = recipes;
      this.recipes.forEach(element => {
        this._pictureService.getCover(element['id'])
          .subscribe(pictures => {
            this.pictures = pictures;
            if(pictures.length > 0) {
              element['cover'] = pictures[0].path;
            }
          });
      });
      this.collection = this.recipes;
    },
    error => this.errorMessage = <any>error);
  }
}
