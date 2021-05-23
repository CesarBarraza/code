import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datos } from './datos';

@Injectable({
  providedIn: 'root'
})
export class MiService {

  ruta: '../../assets/datos.json';
  constructor(private http: HttpClient) { }

  listarDatos(): Observable<Datos[]>{
    return this.http.get<Datos[]>('../../assets/datos.json');
  }
}
