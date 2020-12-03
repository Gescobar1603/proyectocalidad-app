import { Injectable } from '@angular/core';
import { Paquete } from '../entities/paquete';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../entities/categoria';
import { Sucursal } from '../entities/sucursal';

@Injectable({
  providedIn: 'root'
})
export class ReportesGerencialesService {

  private url: string = 'http://localhost:8080/encomiendas/';

  constructor(private http: HttpClient) { }

  buscarPaquetesPorSucursal(idSucursal: number) : Observable<Paquete[]>{
    return this.http.get<Paquete[]>(`${this.url}reporteGerencial/sucursal/${idSucursal}`);
  }

  buscarPaquetesPorCategoria(idCategoria: number) : Observable<Paquete[]>{
    return this.http.get<Paquete[]>(`${this.url}reporteGerencial/categoria/${idCategoria}`);
  }

  obtenerCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.url}/categorias`);
  }

  obtenerSucursales():Observable<Sucursal[]>{
    return this.http.get<Sucursal[]>(`${this.url}/sucursales`);
  }
}
