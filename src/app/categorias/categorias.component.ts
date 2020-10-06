import { Component, OnInit } from '@angular/core';
import {Categoria} from './categoria';
import {CategoriaService} from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categorias= this.categoriaService.getCategorias();
  }

}
