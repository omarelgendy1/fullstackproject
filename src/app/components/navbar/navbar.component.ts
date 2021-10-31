import { Component, OnInit, Input, HostListener, Inject,} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {FlashMessagesService} from 'flash-messages-angular';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
faUser=faUser;
user:any;
faShoppingCart=faShoppingCart;

  constructor(private flashmessage:FlashMessagesService,
    private authService:AuthService,
    private router:Router,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    //this.document.getElementById("navbar")?.classList.add("navbar-dark");
    console.log(this.user);
  }





  @HostListener('window:scroll', [])
  onWindowScroll() {
    //console.log(this.router.url);
    //console.log(window.scrollY);
    if((this.router.url)==='/' ) {
      if(window.scrollY>=590){
      //  console.log("removed");
       // this.document.getElementById("navbar")?.classList.remove("navbar-dark");
      }
      if(window.scrollY<590){
      //  console.log("removed");
      //  this.document.getElementById("navbar")?.classList.add("navbar-dark");
      } 
    }else{
      if(window.scrollY>=275){
        //console.log("removed");
      //  this.document.getElementById("navbar")?.classList.remove("navbar-dark");
       this.document.getElementById("navbar")?.classList.add("bg-dark");
        //this.document.getElementById("navbar")?.classList.add("text-white");
      }
      if(window.scrollY<275){
       // console.log("removed");
       // this.document.getElementById("navbar")?.classList.add("navbar-dark");
        this.document.getElementById("navbar")?.classList.remove("bg-dark");
      } 
    }
    
    
  }


  OnLogoutClick(){
    this.authService.logOut();
    this.router.navigate(['/']);
  }


  loggedIn(){
    if(this.authService.loggedIn()){
      this.user=this.authService.user;
    }
    return this.authService.loggedIn();
   }

}
