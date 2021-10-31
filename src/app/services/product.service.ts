import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }
  getCategories(){
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
   return this.http.get('http://localhost:3000/category/categorieslist',{headers:headers});
    
  }
  getProducts(){
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
   return this.http.get('http://localhost:3000/product/productlist',{headers:headers});
    
  }

  addProduct(product:any){
       

  return this.http.post('http://localhost:3000/product/addProduct',product);
  }
  
}
