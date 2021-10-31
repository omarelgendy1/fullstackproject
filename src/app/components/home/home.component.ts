import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCircle = faCircle;
  faShoppingCart=faShoppingCart;
  faTshirt=faTshirt;
  faHome =faHome;
  faUserPlus=faUserPlus;
  faSignInAlt=faSignInAlt;
  faSquare=faSquare;
  user:any;
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }
  isLoggedIn(){
    if(this.authService.loggedIn()){
      this.user=this.authService.user;
    }
    return this.authService.loggedIn();
  }


}
