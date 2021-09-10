import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaisesModule } from './pais/paises.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaisesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
