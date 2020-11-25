import { Injectable } from '@angular/core';
import { Sucursal } from '../entities/sucursal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {
private url: string = 'http://localhost:8080/encomiendas/sucursales';
private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getSucursals():Observable<Sucursal[]>{
    return this.http.get<Sucursal[]>(this.url);
  }
  createSucursal(sucursal: Sucursal): Observable<Sucursal>{
    return this.http.post<Sucursal>(this.url,sucursal,{headers: this.httpHeaders});
  }

  getSucursal(idSucursal: number): Observable<Sucursal>{
    return this.http.get<Sucursal>(`${this.url}/${idSucursal}`);
  }
  getSucursalNombre(nombre: String): Observable<Sucursal>{
    return this.http.get<Sucursal>(`${this.url}/nombre/${nombre}`);
  }

  updateSucursal(sucursal:Sucursal) : Observable<Sucursal>{
    return this.http.put<Sucursal>(
      `${this.url}/${sucursal.idSucursal}`,sucursal,{headers: this.httpHeaders}
    );
  }

  deshabilitarSucursal(idSucursal: number): void{
    this.http.put<Sucursal>(
        `${this.url +"/deshabilitar"}/${idSucursal}`,{headers: this.httpHeaders}
    )
  }


}
