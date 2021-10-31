import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {FlashMessagesService} from 'flash-messages-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:String | undefined;
password :String | undefined;
  constructor(private flashmessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  OnLoginSubmit(){
    const user={
        username:this.username,
        password:this.password
    }
        this.authService.authenticateUser(user).subscribe((data:any) =>{
         
        if(data.success){
          
          this.authService.storeUserData(data.token,data.user);
     // console.log(data);
          this.router.navigate(['/']);
        }
        });
  }
}
