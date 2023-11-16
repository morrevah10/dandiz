import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatExpansionModule} from '@angular/material/expansion';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/root/app.component';
import { HomeComponent } from './pages/home/home.component';
import { LandComponent } from './pages/land/land.component';
import { HeaderComponent } from './cmps/header/header.component';
import { AbutComponent } from './pages/abut/abut.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { BannerComponent } from './cmps/banner/banner.component';
import { FilterSearchComponent } from './cmps/filter-search/filter-search.component';
import { CardComponent } from './cmps/card/card.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { ShekelPipe } from './pips/shekel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandComponent,
    HeaderComponent,
    AbutComponent,
    ContactComponent,
    FooterComponent,
    BannerComponent,
    FilterSearchComponent,
    CardComponent,
    CartComponent,
    ProductComponent,
    ShekelPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
