import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class IngredientsService {
  private _ingredientsUrl = 'http://gastro.dev:3000/api/ingredients/';
  constructor(private _http: Http) { }

  addIngredient(ingredient) {
    return this._http
      .post(this._ingredientsUrl, {'ingredient': ingredient})
      .map(response => response.json())
      .catch(this.handleError);
  }

  getIngredients() {
      return this._http.get(this._ingredientsUrl)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  checkForIngredient(myIngredient) {
    return this._http.get(this._ingredientsUrl + '/check', {search : {name : myIngredient}})
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
      console.error(error);
      return error.json().error;
  }
}
