import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'src/app/services/validate.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : String | undefined;
  username : String | undefined;
  email :String | undefined;
  password : String | undefined;

  constructor(private validateService:ValidateService ,
 
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    
  }
  OnRegisterSubmit(){
   
    const user={
      name: this.name,
      email : this.email,
      username:this.username,
      password:this.password

    }
   // this.flashmessage.grayOut(true);
    if(!this.validateService.validateRegister(user)){
    ////  this.flashmessage.show("Fill all fields",{cssClass:'alert-danger',timeout:1000,closeOnClick:true});
     
      return false;
    }
    if(!this.validateService.validateEmail(user.email!)){
     // this.flashmessage.show("enter valid email",{cssClass:'alert-danger',timeout:1000,closeOnClick:true});
     
      return false;
    }
    
this.authService.registerUser(user).subscribe((data :any) =>{
  if(data.success){
  //  this.flashmessage.show("You are now registerd",{cssClass:'alert-success',timeout:1000,closeOnClick:true});
    this.router.navigate(['/login']);
    return true;
  }else{
    
    return false;
  }
 }

 );
    
   return true;
    
  }
}
