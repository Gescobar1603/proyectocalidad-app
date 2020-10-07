import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string = 'http://localhost:8080/encomiendas/clientes'

  constructor() { }

  getClientes(): Cliente[]{return CLIENTES; }
}
