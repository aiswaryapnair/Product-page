import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  getProducts(){
    console.log("hi")

    return this.http.get('https://fakestoreapi.com/products');
    
  }
 

}
