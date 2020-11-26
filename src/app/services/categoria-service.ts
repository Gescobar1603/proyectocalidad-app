import { Injectable } from '@angular/core';
import { Categoria } from '../entities/categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
private url: string = 'http://localhost:8080/encomiendas/categorias';
private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  obtenerCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }
  guardarCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.url,categoria,{headers: this.httpHeaders});
  }

  buscarCategoria(idCategoria: number): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.url}/${idCategoria}`);
  }

  actualizarCategoria(categoria:Categoria) : Observable<Categoria>{
    return this.http.put<Categoria>(`${this.url}/${categoria.idCategoria}`,categoria,{headers: this.httpHeaders}
    );
  }

  deshabilitarCategoria(idCategoria: number): void{
    this.http.put<Categoria>(`${this.url +"/deshabilitar"}/${idCategoria}`,{headers: this.httpHeaders}
    )
  }
  buscarCategoriaConElPesoMaximoMasAlto(): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.url}/pesoMaximo`);
  }

}
