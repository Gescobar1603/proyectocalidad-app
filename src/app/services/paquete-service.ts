import { Injectable } from '@angular/core';
import { Paquete } from '../entities/paquete';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
private url: string = 'http://localhost:8080/encomiendas/paquetes';
private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getPaquetes():Observable<Paquete[]>{
    return this.http.get<Paquete[]>(this.url);
  }
  createPaquete(paquete: Paquete): Observable<Paquete>{
    return this.http.post<Paquete>(this.url,paquete,{headers: this.httpHeaders});
  }

  getPaquete(idPaquete: number): Observable<Paquete>{
    return this.http.get<Paquete>(`${this.url}/${idPaquete}`);
  }

  updatePaquete(paquete:Paquete) : Observable<Paquete>{
    return this.http.put<Paquete>(
      `${this.url}/${paquete.idPaquete}`,paquete,{headers: this.httpHeaders}
    );
  }

  deshabilitarPaquete(idPaquete: number): void{
    this.http.put<Paquete>(
        `${this.url +"/deshabilitar"}/${idPaquete}`,{headers: this.httpHeaders}
    )
  }


}
