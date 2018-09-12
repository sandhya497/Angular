import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';



import {DatausersService}from './datausers.Service';

import { MenuComponent } from './menu/menu.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,


  

    MenuComponent,
    LeftComponent,
    RightComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
