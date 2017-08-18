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

  constructor(public fb: FormBuilder, private _recipeService: RecipeService, private _pictureService: PictureService) {  }

  ngOnInit(): void {
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
                },
               error => this.errorMessage = <any>error);
  }
  removeRecipe(id) {
    //console.log('aici', id, this.recipes);
    this._recipeService.deleteRecipe(id);
  }
  // getPictures(idRecipe) {
  //   this._pictureService.getPictures(idRecipe)
  //   .subscribe(pictures => this.pictures,
  //     error => this.errorMessage = <any>error);
  // }
}
