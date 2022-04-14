import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
// import {HttpClientModule} from '@angular/common/http'
import { HttpClientModule } from  '@angular/common/http';
// import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { LayoutModule } from '@angular/cdk/layout';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';






@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    CarouselModule,
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
