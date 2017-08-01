import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRecipe } from './recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'bb-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  providers: [RecipeService]
})
export class RecipesListComponent implements OnInit {
  pageTitle: string = "Lista retete";
  //listFilter: string;
  errorMessage: string;
  recipes: IRecipe[];

  constructor(public fb: FormBuilder, private _recipeService: RecipeService) {  }

  ngOnInit(): void {
    this._recipeService.getRecipes()
    .subscribe(recipes => this.recipes = recipes,
               error => this.errorMessage = <any>error);
  }
}
