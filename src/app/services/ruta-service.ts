import { Injectable } from '@angular/core';
import { Ruta } from '../entities/ruta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RutaService {
private url: string = 'http://localhost:8080/encomiendas/rutas';
private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getRutas():Observable<Ruta[]>{
    return this.http.get<Ruta[]>(this.url);
  }
  createRuta(ruta: Ruta): Observable<Ruta>{
    return this.http.post<Ruta>(this.url,ruta,{headers: this.httpHeaders});
  }

  getRuta(idRuta: number): Observable<Ruta>{
    return this.http.get<Ruta>(`${this.url}/${idRuta}`);
  }

  updateRuta(ruta:Ruta) : Observable<Ruta>{
    return this.http.put<Ruta>(
      `${this.url}/${ruta.idRuta}`,ruta,{headers: this.httpHeaders}
    );
  }

  deshabilitarRuta(idRuta: number): void{
    this.http.put<Ruta>(
        `${this.url +"/deshabilitar"}/${idRuta}`,{headers: this.httpHeaders}
    )
  }
  getRutaPorSucursales(idSucursalEmisor: number,idSucursalReceptor:number): Observable<Ruta>{
    return this.http.get<Ruta>(`${this.url}/buscar/${idSucursalEmisor}/${idSucursalReceptor}`)
  }


}
