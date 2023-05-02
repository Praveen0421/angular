import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes } from '@angular/router';
const router:Routes = [
  {path:'',component:HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(router),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
