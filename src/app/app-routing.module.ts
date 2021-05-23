import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { R2Component } from './componentes/r2/r2.component';
import { R3Component } from './componentes/r3/r3.component';

const routes: Routes = [
  { path: 'tabla-datos', component: R2Component },
  { path: 'video', component: R3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
