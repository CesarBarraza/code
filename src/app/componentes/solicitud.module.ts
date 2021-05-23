import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';
import { R4Component } from './r4/r4.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ R2Component, R3Component, R4Component, HomeComponent ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SolicitudModule { }
