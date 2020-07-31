import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { DevelopmentComponent } from './components/development/development.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { UspComponent } from './components/usp/usp.component';
import { WebsiteComponent } from './components/website/website.component';
import { AboutComponent} from './about/about.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'marketing', component: MarketingComponent},
  {path: 'development', component: DevelopmentComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'usp', component: UspComponent},
  {path: 'website', component: WebsiteComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
