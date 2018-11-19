import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
   public path: string;
  constructor() {
     this.path = "http://localhost:57812/api/";
  }
}
