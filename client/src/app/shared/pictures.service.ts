import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()

export class PictureService {
  private _pictureUrl = 'http://gastro.dev:3000/api/pictures/';
  constructor(private _http: Http) { }

  addPicture(body) {
    return this._http
      .post(this._pictureUrl, body)
      .map(response => response.json())
      .subscribe(result => JSON.stringify(result));
  }

  // get receipe's cover
  getCover(idRecipe) {
      return this._http.get(this._pictureUrl + '/' + idRecipe + '/1')
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  // get all the picures for one receipe
  getPictures(idRecipe) {
      return this._http.get(this._pictureUrl + '/' + idRecipe)
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
      console.error(error);
      return error.json().error;
  }
}
