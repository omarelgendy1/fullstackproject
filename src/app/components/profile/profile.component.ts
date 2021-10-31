import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 user:any | undefined;
  constructor(private authService :AuthService
    ,private router:Router
    ) { }

  ngOnInit(): void {
    // this.authService.getProfile().subscribe((profile:any)=>{
    // console.log(profile);
    //   this.user=profile;
    //   console.log(this.user);
     
    // },err=>{
    //   console.log(err);
    //   return false; 
    // });
    if(this.authService.loggedIn()){
      this.user=this.authService.user;
    }
  }

  isEmptyCart(){
    //console.log(this.user.cart.length)
    if(this.user.cart.length>0){
      return false;
    }
    else{
      return true;
    }


  }
  
  removeFromCart(product:any){
    this.user.cart.forEach( (item:any, index:any) => {
      if(item.id === product.id) this.user.cart.splice(index,1);
      
    });
    console.log(product);
  }

}
