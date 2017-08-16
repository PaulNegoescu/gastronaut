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

  private handleError(error: Response) {
      console.error(error);
      return error.json().error;
  }
}
