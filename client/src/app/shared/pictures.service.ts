import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response, URLSearchParams} from '@angular/http';
let newRecipe;

@Injectable()

export class PictureService {
  private _pictureUrl = 'http://gastro.dev:3000/api/pictures/';
  constructor(private _http: Http) {  }


  addPicture(body) {
    console.log('>>>', body, '<<<<<');


    // !!!!!  nu face adaugarea in baza de date; consola este printata dar nu face requestul catre server
    return this._http
        .post(this._pictureUrl, body)
        .map((response: Response) => response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)));
        //.catch(this.handleError);
  }

}



