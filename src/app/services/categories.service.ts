import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getCategories(){
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
   return this.http.get('http://localhost:3000/category/categorieslist',{headers:headers});
    
  }

  


}
