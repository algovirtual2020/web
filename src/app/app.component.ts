import { element } from 'protractor';

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Subscriber } from 'rxjs';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit  {

 
  title = 'algovirtual-web';
  public bool:boolean= true;

  public state:string = "";

  
  constructor(private ViewportScroller: ViewportScroller) { }
    ngOnInit(){
      AOS.init(
        {}
      );
    }




  

    
  


}
