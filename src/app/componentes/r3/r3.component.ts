import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r3',
  templateUrl: './r3.component.html',
  styleUrls: ['./r3.component.css']
})
export class R3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirVideo(){
    let abrir= document.getElementById('mostrar-cerrar')
    abrir.style.display = 'block'
  } 

  cerrarVideo(){
    let cerrar = document.getElementById('mostrar-cerrar');
    cerrar.style.display = 'none'
  }

}
