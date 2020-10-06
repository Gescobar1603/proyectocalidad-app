import { Injectable } from '@angular/core';
import { PAQUETES } from './paquetes.json';
import { Paquete } from './paquete';

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor() { }
  getPaquetes(): Paquete[]{return PAQUETES;}
}
