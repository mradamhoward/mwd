import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { Observable, Observer } from 'rxjs';
import Stepper from 'bs-stepper';
import 'rxjs/add/operator/share'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  name = 'Angular';
  private stepper: Stepper;

  constructor() {
    
   }


  @HostListener('window:scroll', ['$event']) 
  scrollHandler($event) {
    AOS.refresh();
  
  }

  
  ngOnInit() {
    AOS.init({
    });

    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
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
