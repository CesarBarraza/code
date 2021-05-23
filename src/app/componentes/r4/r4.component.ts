import { Component, OnInit } from '@angular/core';
import { MiService } from '../shared/mi.service';
import { Usuario } from '../shared/usuario';


@Component({
  selector: 'app-r4',
  templateUrl: './r4.component.html',
  styleUrls: ['./r4.component.css']
})
export class R4Component implements OnInit {

  user: Usuario[]= [];

  constructor(private service: MiService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listarUsuarios().subscribe(
      data => this.user = data
    )
  }

}
