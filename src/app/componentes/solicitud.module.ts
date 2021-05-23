import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';



@NgModule({
  declarations: [ R2Component, R3Component ],
  imports: [
    CommonModule
  ]
})
export class SolicitudModule { }
