import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { R2Component } from './componentes/r2/r2.component';
import { R3Component } from './componentes/r3/r3.component';
import { R4Component } from './componentes/r4/r4.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tabla-datos', component: R2Component },
  { path: 'video', component: R3Component },
  { path: 'user', component: R4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
