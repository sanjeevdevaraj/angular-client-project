import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { CustomMaterialModule } from '../../core/material.module';
import { PopUpComponent } from './register-client/pop-up/pop-up.component';

@NgModule({
  declarations: [RegisterClientComponent, ViewClientComponent,PopUpComponent],
  imports: [
    CommonModule,CustomMaterialModule
  ],
  entryComponents :[PopUpComponent]
})
export class ClientDetailModule { }
