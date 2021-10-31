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
export class AdminService {

  constructor(private http:HttpClient) { }
  getUsers(){
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
   return this.http.get('http://localhost:3000/api/Users',{headers:headers});
  }

  deleteUser(userId:any){
   
    httpOptions.headers = httpOptions.headers.set('body',userId );   

   return this.http.delete('http://localhost:3000/admin/deleteuser',httpOptions);
  }

  deleteProduct(productId:any){

    httpOptions.headers = httpOptions.headers.set('body',productId );   

    return this.http.delete('http://localhost:3000/admin/deleteproduct',httpOptions);
  }
  deleteCategory(categoryId:any){
    httpOptions.headers = httpOptions.headers.set('body',categoryId );   

    return this.http.delete('http://localhost:3000/admin/deletecategory',httpOptions);
  }
}
