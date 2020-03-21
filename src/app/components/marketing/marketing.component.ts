import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  private fb: boolean = false;
  private sem: boolean = false;
  private email: boolean = false;
  private lnkd: boolean = false;
  private yt: boolean = false;
  private tw: boolean = false;
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

  emailClick(){
    if(this.email == true){
      this.email = false;
    } else{
      this.email = true;
    }
  }

  lnkdClick(){
    if(this.lnkd == true){
      this.lnkd = false;
    } else{
      this.lnkd = true;
    }
  }

  ytClick(){
    if(this.yt == true){
      this.yt = false;
    } else{
      this.yt = true;
    }
  }

  twClick(){
    if(this.tw == true){
      this.tw = false;
    } else{
      this.tw = true;
    }
  }
}
