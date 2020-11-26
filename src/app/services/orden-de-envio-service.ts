import { Injectable } from '@angular/core';
import { OrdenDeEnvio } from '../entities/orden-de-envio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdenDeEnvioService {
private url: string = 'http://localhost:8080/encomiendas/ordenDeEnvios';
private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  obtenerOrdenesDeEnvio():Observable<OrdenDeEnvio[]>{
    return this.http.get<OrdenDeEnvio[]>(this.url);
  }

  guardarOrdenDeEnvio(ordenDeEnvio: OrdenDeEnvio): Observable<OrdenDeEnvio>{
    return this.http.post<OrdenDeEnvio>(this.url,ordenDeEnvio,{headers: this.httpHeaders});
  }

  listarOrdenDeEnvio(idOrdenDeEnvio: number): Observable<OrdenDeEnvio>{
    return this.http.get<OrdenDeEnvio>(`${this.url}/${idOrdenDeEnvio}`);
  }

  actualizarOrdenDeEnvio(ordenDeEnvio:OrdenDeEnvio) : Observable<OrdenDeEnvio>{
    return this.http.put<OrdenDeEnvio>(
      `${this.url}/${ordenDeEnvio.idOrdenDeEnvio}`,ordenDeEnvio,{headers: this.httpHeaders}
    );
  }

  deshabilitarOrdenDeEnvio(idOrdenDeEnvio: number): void{
    this.http.put<OrdenDeEnvio>(
        `${this.url +"/deshabilitar"}/${idOrdenDeEnvio}`,{headers: this.httpHeaders}
    )
  }


}
