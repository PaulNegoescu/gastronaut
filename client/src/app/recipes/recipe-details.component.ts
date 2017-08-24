import { Component, OnInit } from '@angular/core';
import { Router, NavigationCancel, ActivatedRoute } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import { RecipeService } from './recipe.service';
import { PictureService } from '../shared/pictures.service';

@Component({
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  pageTitle: string = "Product Details";
  errorMessage: string;
  url: string;
  id: string;
  coverDetails: any;
  cover: string;
  pictures: any;

  title: string;
  description: string;
  cooking_time: string;

  constructor(public router: Router, private route: ActivatedRoute, private _recipeService: RecipeService, private _picturesService: PictureService) {
    this.url = route.snapshot.url.join('/');
  }

  ngOnInit() {
    this.id = this.url.split('/')[1];
    this.getRecipeDetails(this.id);
  }

  getRecipeDetails(id) {
    this._recipeService.getRecipesById(id)

    .subscribe(recipes => {
      if(recipes.length > 0) {
        let currentRecipe = recipes[0];
        this.title = currentRecipe.title;
        this.description = currentRecipe.description;

        this.cooking_time = (currentRecipe['cooking_time'] >= 60) ? Math.floor(currentRecipe['cooking_time']/60) + 'h ' + recipes[0]['cooking_time']%60 + 'min' : currentRecipe['cooking_time']%60 + 'min';
        this._picturesService.getCover(id)
          .subscribe(pictures => {
            if(pictures.length > 0) {
              this.coverDetails = pictures;
              this.cover = pictures[0].path;
            }
          });

        this._picturesService.getPictures(id)
          .subscribe(pictures => {
            if(pictures.length > 0) {
              this.pictures = pictures;
            }
          });
      }
    },
    error => this.errorMessage = <any>error);
  }

}
