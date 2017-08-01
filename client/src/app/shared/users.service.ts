import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response, URLSearchParams} from '@angular/http';

@Injectable()

export class UserService {
  constructor(private http: Http) {  }

  public getList() {
    let myParams = {};
    return this.http.get('http://gastro.dev:3000/users');
  }
}



