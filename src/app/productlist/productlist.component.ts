import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// import * as Aos from 'aos';

import * as Aos from 'aos' ;
import { OwlOptions } from 'ngx-owl-carousel-o';





@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  constructor(private api:ApiserviceService,private responsive:BreakpointObserver) { }
  products:any;
  item:any
  ngOnInit(): void {
    this.responsive.observe([Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
  ]).subscribe( (state: BreakpointState) => {
    if (state.breakpoints[Breakpoints.XSmall]) {
         console.log( 'Matches XSmall viewport');
    }
    if (state.breakpoints[Breakpoints.Small]) {
         console.log( 'Matches Small viewport');
    }
    if (state.breakpoints[Breakpoints.Medium]) {
         console.log( 'Matches Medium  viewport');
    }
    if (state.breakpoints[Breakpoints.Large]) {

        console.log( 'Matches Large viewport');
    }
    if (state.breakpoints[Breakpoints.XLarge]) {

       console.log( 'Matches XLarge viewport');   
    }
  });
    this.api.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));

    //  this.products=data;
    });
    Aos.init();

    /*this.responsive.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
           console.log( 'Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
           console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
           console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {

          console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

         console.log( 'Matches XLarge viewport');   
      }
     
        }) */
   
  }
   
    // customOptions: OwlOptions = {
      customOptions: OwlOptions ={
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['prev', 'next'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 1
        }
      },
      nav: true
    }

  }
  
