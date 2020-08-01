import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { DevelopmentComponent } from './components/development/development.component';
import { Ng2OdometerModule } from 'ng2-odometer';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
   
    
    ContactComponent,
    MarketingComponent,
    DevelopmentComponent,
    AboutComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    Ng2OdometerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
