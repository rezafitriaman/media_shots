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
import { ItemsComponent } from './diensten/items/items.component';
import { CardComponent } from './werkwijze/card/card.component';

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
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
