import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user:any){
      if(user.name==undefined ||user.email==undefined || user.username==undefined ||user.password==undefined 
        ||user.name=="" ||user.email==""|| user.username=="" ||user.password=="" ){
        return false;
      }else{
        return true;
      }
  }

  validateEmail(email:String){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

}
