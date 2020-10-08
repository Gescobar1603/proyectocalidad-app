import { Injectable } from '@angular/core';
import { OrdenDeEnvio } from './orden-de-envio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdeDeEnvioService {
private url: string = 'http://localhost:8080/encomiendas/ordeDeEnvios';
private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getOrdeDeEnvios():Observable<OrdenDeEnvio[]>{
    return this.http.get<OrdenDeEnvio[]>(this.url);
  }
  createOrdeDeEnvio(ordeDeEnvio: OrdenDeEnvio): Observable<OrdenDeEnvio>{
    return this.http.post<OrdenDeEnvio>(this.url,ordeDeEnvio,{headers: this.httpHeaders});
  }

  getOrdeDeEnvio(dni: number): Observable<OrdenDeEnvio>{
    return this.http.get<OrdenDeEnvio>(`${this.url}/${dni}`);
  }

  updateOrdeDeEnvio(ordeDeEnvio:OrdenDeEnvio) : Observable<OrdenDeEnvio>{
    return this.http.put<OrdenDeEnvio>(
      `${this.url}/${ordeDeEnvio.idOrdenDeEnvio}`,ordeDeEnvio,{headers: this.httpHeaders}
    );
  }

  deshabilitarOrdeDeEnvio(dni: number): void{
    this.http.put<OrdenDeEnvio>(
        `${this.url +"/deshabilitar"}/${dni}`,{headers: this.httpHeaders}
    )
  }


}
