import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories:any;
  
  products:any;
  filterCategory :any=new Array();
  faCircle=faCircle;
  faTshirt=faTshirt;
    constructor(private productService :ProductService,
     private config: NgbCarouselConfig,
     private authService :AuthService,
     private router :Router ) { 
  config.wrap=false;
    }
  
    ngOnInit(): void {
     this.getCategories();
     this.getProducts();
     
  
  }

  chooseCategory(filter:any){
    this.products.forEach( (item:any, index:any) => {
      if(item.category!== filter) item.visible=false;
    });
    console.log(this.products);
  }

  addTag(data:any){
    
    if(this.filterCategory.includes(data)==false){
    this.filterCategory.push(data);
      this.chooseCategory(data);
    }
    
    
  }

  removeFilter(data:any){
   
      this.filterCategory.forEach( (item:any, index:any) => {
        if(item === data) this.filterCategory.splice(index,1);
        
      });
      
   
  }

  
  removeTag(data:any){
this.removeFilter(data);
this.products.forEach((item:any) => {
  if(item.category!==data)item.visible=true;
  
});

  }

  getCategories(){
    this.productService.getCategories().subscribe((category:any)=>{
      console.log(category.length);
      console.log(category[0].mainCategory);
      
      this.categories=category;
      
     },err=>{
        console.log(err);
        return false; 
    });
    
  }

  getProducts(){
    this.productService.getProducts().subscribe((products:any)=>{
      // console.log(category.length);
      // console.log(category[0].mainCategory);
      
      this.products=products;
      this.products.forEach((item:any) => {
       item.visible= true;
      });
     
      
      
     },err=>{
        console.log(err);
        return false; 
    });
  }

addToCart(product:any){
      if(this.isLoggedIn()){
        console.log(this.authService.user);
        this.authService.user.cart.push(product);
        //console.log(product);
        console.log(this.authService.user);
        
      }

}
  isLoggedIn(){
      //console.log(this.authService.loggedIn());
      if(!this.authService.loggedIn()){
        this.router.navigate(['/login']);
          return false;
      }else{
        return true;

      }
  }
  }
