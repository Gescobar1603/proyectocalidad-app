import { Injectable } from '@angular/core';
import { Paquete } from '../entities/paquete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenDeEnvio } from '../entities/orden-de-envio';

@Injectable({
  providedIn: 'root'
})
export class GestionesDeEntradasPaquetesService {
  private url: string = 'http://localhost:8080/encomiendas/';
  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  cotizarPaquete(paquetes:Paquete[]) : Observable<Paquete[]>{
    return this.http.post<Paquete[]>(
      `${this.url+"gestionarRecepcionDePaquetes/paquete"}`,paquetes,{headers: this.httpHeaders}
    );
  }
  procesarOrden(ordenDeEnvio: OrdenDeEnvio) : Observable<OrdenDeEnvio>{
    return this.http.post<OrdenDeEnvio>(
      `${this.url+"gestionarRecepcionDePaquetes/orden"}`,ordenDeEnvio,{headers: this.httpHeaders}
    );
  }

  guardarOrden(ordenDeEnvio: OrdenDeEnvio) : Observable<OrdenDeEnvio>{
    return this.http.post<OrdenDeEnvio>(
      `${this.url+"/gestionarRecepcionDePaquetes/guardar"}`,ordenDeEnvio,{headers: this.httpHeaders}
    );
  }


}
