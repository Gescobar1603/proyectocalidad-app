import { Injectable } from '@angular/core';
import { Paquete } from '../entities/paquete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdenDeEnvio } from '../entities/orden-de-envio';
import { Categoria } from '../entities/categoria';
import { Cliente } from '../entities/cliente';
import { Ruta } from '../entities/ruta';
import { Sucursal } from '../entities/sucursal';

@Injectable({
  providedIn: 'root'
})
export class GestionesDeEntradasPaquetesService {
  private url: string = 'http://localhost:8080/encomiendas/';
  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  cotizarPaquetes(paquetes:Paquete[]) : Observable<Paquete[]>{
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

  buscarCategoriaConElPesoMaximoMasAlto(): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.url}/categorias/pesoMaximo`);
  }

  obtenerClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}/clientes`);
  }

  buscarRutaPorSucursales(idSucursalEmisor: number,idSucursalReceptor:number): Observable<Ruta>{
    return this.http.get<Ruta>(`${this.url}/rutas/buscar/${idSucursalEmisor}/${idSucursalReceptor}`)
  }

  obtenerSucursales():Observable<Sucursal[]>{
    return this.http.get<Sucursal[]>(`${this.url}/sucursales`);
  }
}
