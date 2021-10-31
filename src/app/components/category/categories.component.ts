import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { faTshirt } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [NgbCarouselConfig]  
})
export class CategoriesComponent implements OnInit {
categories:any;
faCircle=faCircle;
faTshirt=faTshirt;
  constructor(private categoriesService :CategoriesService,
   private config: NgbCarouselConfig) { 
config.wrap=false;
  }

  ngOnInit(): void {
   
    this.categoriesService.getCategories().subscribe((category:any)=>{
    console.log(category.length);
    console.log(category[0].mainCategory);
    
    this.categories=category;
    
   },err=>{
      console.log(err);
      return false; 
  });

}

}