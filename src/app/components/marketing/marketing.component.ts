import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  private fb: boolean = false;
  private sem: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  fbClick(){
    

    if(this.fb == true){
      this.fb = false;
    } else{
      this.fb = true;
    }
  }
  semClick(){
    if(this.sem == true){
      this.sem = false;
    } else{
      this.sem = true;
    }
  }
}
