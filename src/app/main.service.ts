import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private api: ApiService
  ) { }

  login() {

  }

  register() {

  }

  films(params) {
    return this.api.get('/films', params);
  }

  filmDetails() {

  }

  filmCreate() {

  }
}
