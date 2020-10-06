import { Injectable } from '@angular/core';
import { CATEGORIAS } from './categorias.json';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  getCategorias(): Categoria[]{return CATEGORIAS;}
}
