import { Component, OnInit } from '@angular/core';
import { MiService } from '../shared/mi.service';
import { Datos } from '../shared/datos';

@Component({
  selector: 'app-r2',
  templateUrl: './r2.component.html',
  styleUrls: ['./r2.component.css']
})
export class R2Component implements OnInit {

  datos: Datos[] = [];

  constructor(private miServicio: MiService) { }

  ngOnInit(): void {
    this.listarDatos();
  }

  listarDatos(){
    this.miServicio.listarDatos().subscribe(
      data => this.datos=data
    )
  }

}
