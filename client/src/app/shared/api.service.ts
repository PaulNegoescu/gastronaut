import { Injectable } from '@angular/core';
import { MockBackend } from '@angular/http/testing';

@Injectable()
export class ApiService {

  constructor() {
      console.log('Creating DataService');
  }

}
