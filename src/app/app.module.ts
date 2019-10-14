import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientDetailModule } from './index/client-detail/client-detail.module';
import { CustomMaterialModule } from './core/material.module';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ClientDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
