import { Injectable } from '@angular/core';
import {ORDENES} from './ordenes-de-envios.json';
import {OrdenDeEnvio} from './orden-de-envio';

@Injectable({
  providedIn: 'root'
})
export class OrdenDeEnvioService {

  constructor() { }
  getOrdenesDeEnvios(): OrdenDeEnvio[]{return ORDENES;}
}
