import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'https://doctorfast-backend.herokuapp.com';
  constructor() { }

  public getUrl(): string
  {
    return this.url;
  }

}
