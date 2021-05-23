import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Datos } from './datos';
import { Usuario } from './usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiService {

  //ruta: '../../assets/datos.json';
  constructor(private http: HttpClient) { }

  listarDatos(): Observable<Datos[]>{
    return this.http.get<Datos[]>('../../assets/datos.json');
  }

  listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(environment.URL_API).pipe(
      map(data=>{
        var user:Usuario[]=[];

        data["data"].forEach((u)=>{
          user.push({
            id:u["id"],
            first_name:u["first_name"],
            last_name:u["last_name"],
            email:u["email"],
            avatar:u["avatar"]
          });
        });
        return user;
      })
    )
  }
}
