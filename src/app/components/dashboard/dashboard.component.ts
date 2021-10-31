import { Component, OnInit } from '@angular/core';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  panelOpenState1 = false;
  panelOpenState2 = false;
  faTshirt = faTshirt;
  products: any;
  categories: any;
  users: any;
   newProduct = {
    name: "",
    number: "",
    category:"",
    price:""
  };
  newCategory = {
    mainCategory: "",
    subCategory: "",
    
  };
  

  constructor(private productService: ProductService,
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    this.getUsers();

  }

  getProducts() {
    this.productService.getProducts().subscribe((products: any) => {

      this.products = products;

    }, err => {
      console.log(err);
      return false;
    });
  }


  getCategories() {
    this.productService.getCategories().subscribe((categories: any) => {

      this.categories = categories;
    }, err => {
      console.log(err);
      return false;
    });
  }
  getUsers() {
    this.adminService.getUsers().subscribe((users: any) => {

      this.users = users;
    }, err => {
      console.log(err);
      return false;
    });
  }

  removeProduct(product: any) {
    this.products.forEach((item: any, index: any) => {
      if (item == product) {
        this.products.splice(index, 1);
        this.adminService.deleteProduct(product._id).subscribe((data: any) => {
          console.log(data);
        })
      }
    });

  }
  removeCategory(category: any) {
    this.categories.forEach((item: any, index: any) => {
      if (item == category) {
        this.categories.splice(index, 1);
        this.adminService.deleteCategory(category._id).subscribe((data: any) => {
          console.log(data);
        });
      }
    });
  }

  removeUser(user: any) {
    this.users.forEach((item: any, index: any) => {
      if (item == user) {
        this.users.splice(index, 1);
        this.adminService.deleteUser(user._id).subscribe((data: any) => {
          console.log(data);
        })
      }
    });
  }

  OnAddProductSubmit(){
    console.log(this.newProduct);
      this.productService.addProduct(this.newProduct).subscribe((data:any)=>{
        console.log(data);
      })
      this.getProducts();
  }

  onAddCategorySubmit(){}


}
