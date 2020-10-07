import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DienstenComponent } from './diensten/diensten.component';
import { WerkwijzeComponent } from './werkwijze/werkwijze.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CardPortfolioComponent } from './portfolio/card-portfolio/card-portfolio.component';
import { OverOnsComponent } from './over-ons/over-ons.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diensten', component: DienstenComponent },
  { path: 'werkwijze', component: WerkwijzeComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: 'bedrijfsvideo', component: CardPortfolioComponent },
      { path: 'instructievideo', component: CardPortfolioComponent },
      { path: 'socialmediavideo', component: CardPortfolioComponent },
      { path: 'aftermovie', component: HomeComponent },
    ],
  },
  { path: 'over-ons', component: OverOnsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
