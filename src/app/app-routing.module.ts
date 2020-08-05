import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { DevelopmentComponent } from './components/development/development.component';
import { AboutComponent} from './about/about.component'
import { PortfolioComponent} from './portfolio/portfolio.component'
import { PrivacyComponent} from './components/privacy/privacy.component'
import { TermsComponent} from './components/terms/terms.component'



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'marketing', component: MarketingComponent},
  {path: 'development', component: DevelopmentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'privacy-policy', component: PrivacyComponent},
  {path: 'terms', component: TermsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
