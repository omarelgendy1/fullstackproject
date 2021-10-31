import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { CommonModule } from '@angular/common';  
import {JwtModule} from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';





import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TestComponent } from './components/test/test.component';
import { TestDirectiveDirective } from './directives/test-directive.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './components/category/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthGuard } from './guards/auth.guard';



const appRoutes : Routes = [
  {path:'',component:HomeComponent} ,
//  {path:'',component:TestComponent},
 {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'categories',component:CategoriesComponent},
  {path:'products',component:ProductsComponent},
  


];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    TestDirectiveDirective,
    CategoriesComponent,
    ProductsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,CommonModule,
    FontAwesomeModule,
    MatTabsModule,MatCardModule,MatExpansionModule,
    MatFormFieldModule,MatInputModule
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
