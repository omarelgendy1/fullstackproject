import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken :any;
  user :any;
  constructor(private http:HttpClient) { }
   helper = new JwtHelperService();

  registerUser  (user:any){
  
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
  return  this.http.post('http://localhost:3000/api/register',user,{headers:headers})    ;



    //Another way of get data via promise!!!!!!!!
    // return this.http.post('http://localhost:3000/api/register',user,{headers:headers}).toPromise().then(data=>{
    //   console.log(data);
    // });

  }
  authenticateUser(user:any){
    let headers =new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/authenticate',user,{headers:headers});
  }
  getProfile(){
   
    this.loadToken();
    httpOptions.headers = httpOptions.headers.set('Authorization', this.authToken);   
    
    //console.log(this.http.get('http://localhost:3000/api/profile',httpOptions));
    return this.http.get('http://localhost:3000/api/profile',httpOptions);
  }
  loadToken(){
    const token=localStorage.getItem('id_token');
    this.authToken=token;
    
  }
  loggedIn(){
    //console.log(this.helper.isTokenExpired(this.authToken));
   return !this.helper.isTokenExpired(this.authToken);
  }

    storeUserData(token:any,user:any){
      localStorage.setItem('id_token',token);
      localStorage.setItem(user,JSON.stringify(user));
      this.authToken=token;
      this.user=user;
      
    }
    logOut(){
      this.authToken=null;
      httpOptions.headers=httpOptions.headers.set('Authorization', "null");
      this.user=null;
     
      localStorage.clear();
     
      console.log("logged out");
    }
}
