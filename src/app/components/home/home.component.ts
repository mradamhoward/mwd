import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { Observable, Observer } from 'rxjs';
import Stepper from 'bs-stepper';
import 'rxjs/add/operator/share'
import particlesJS from 'particles.js';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  private number: number;
  private number1: number;
  private number2: number;
  private number3: number;
  name = 'Angular';
  private stepper: Stepper;
  private scroller: boolean = false;

 

  myStyle: object = {};
    myParams: object = {
     
            
    };
    width: number = 100;
    height: number = 100;

  



    constructor() {
  

    }

   

    @HostListener('window:scroll', ['$event']) 
    scrollHandler($event) {



    AOS.refresh();
    this.number = 0;
    
    setTimeout(() => {
      
    if(this.number == 0){
        this.number = 9;
     } else {
      this.number = 9;
     }}, 1
    );

    this.number1 = 0;
    setTimeout(() => {
      
    if(this.number1 == 0){
        this.number1 = 43;
     } else {
      this.number1 = 43;
     }}, 1
    );

    this.number2 = 0;
    setTimeout(() => {
      
    if(this.number2 == 0){
        this.number2 = 130;
     } else {
      this.number2 = 130;
     }}, 1
    );

    this.number3 = 0;
    setTimeout(() => {
      
    if(this.number3 == 0){
        this.number3 = 80;
     } else {
      this.number3 = 80;
     }}, 1
    );
  }

  
  ngOnInit() {
    

    AOS.init({
    });

    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })

    this.myStyle = {
      'position': 'relative',
      'width': '100%',
      'height': '95%',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

this.myParams = {
      particles: {
          number: {
              value: 110,
          },
          color: {
              value: '#000fa8'
          },
          shape: {
              type: 'circle',
          },
  }
};
  }

  

  // For auto mode
 // Update on 5 seconds


 

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }


}
