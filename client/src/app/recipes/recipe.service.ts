import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IRecipe } from './recipe';

@Injectable()

export class RecipeService {
    private _recipeUrl = 'http://gastro.dev:3000/api/recipes/';

    constructor( private _http: Http) {}

    getRecipes(): Observable<IRecipe[]> {
      return this._http.get(this._recipeUrl)
        .map((response: Response) => <IRecipe[]> response.json())
        .catch(this.handleError);
    }

    addRecipe(body): Observable<IRecipe[]> {
      return this._http
        .post(this._recipeUrl, body)
        .map((response: Response) => response.json())
        .do(data => JSON.stringify(data))
        .catch(this.handleError);
    }

    deleteRecipe(idRecipe) {
      console.log('Sterge reteta cu id-ul: ', idRecipe);
      return this._http
        .delete(this._recipeUrl + '/' + idRecipe, idRecipe)
        .map(response => response.json())
        .subscribe(result => JSON.stringify(result));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
