import { Injectable } from '@angular/core';
import { Cliente } from '../entities/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
private url: string = 'http://localhost:8080/encomiendas/clientes';
private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  obtenerClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }
  guardarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url,cliente,{headers: this.httpHeaders});
  }

  buscarCliente(dni: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/${dni}`);
  }

  actualizarCliente(cliente:Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(
      `${this.url}/${cliente.idCliente}`,cliente,{headers: this.httpHeaders}
    );
  }

  deshabilitarCliente(dni: number): void{
    this.http.put<Cliente>(
        `${this.url +"/deshabilitar"}/${dni}`,{headers: this.httpHeaders}
    )
  }


}
