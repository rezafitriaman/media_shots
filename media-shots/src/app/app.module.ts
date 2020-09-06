import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import { SamenwerkingComponent } from './home/samenwerking/samenwerking.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DienstenComponent } from './diensten/diensten.component';
import { WerkwijzeComponent } from './werkwijze/werkwijze.component';
import { ItemsComponent } from './diensten/item/items.component';
import { CardComponent } from './werkwijze/card/card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavComponent } from './portfolio/nav/nav.component';
import { ItemComponent } from './portfolio/nav/item/item.component';
import { CardPortfolioComponent } from './portfolio/card-portfolio/card-portfolio.component';
import { OverOnsComponent } from './over-ons/over-ons.component';
import { PhotoComponent } from './over-ons/photo/photo.component';
import { ContactComponent } from './contact/contact.component';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'diensten', component: DienstenComponent},
  {path: 'werkwijze', component: WerkwijzeComponent},
  {path: 'portfolio', component: PortfolioComponent,
    children: [
      {path: 'bedrijfsvideo', component: CardPortfolioComponent},
      {path: 'instructievideo', component: CardPortfolioComponent},
      {path: 'socialmediavideo', component: CardPortfolioComponent},
      {path: 'aftermovie', component: HomeComponent}
    ]},
  {path: 'over-ons', component: OverOnsComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    JumbotronComponent,
    SamenwerkingComponent,
    FooterComponent,
    HomeComponent,
    DienstenComponent,
    WerkwijzeComponent,
    ItemsComponent,
    CardComponent,
    PortfolioComponent,
    NavComponent,
    ItemComponent,
    CardPortfolioComponent,
    OverOnsComponent,
    PhotoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MessageService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
