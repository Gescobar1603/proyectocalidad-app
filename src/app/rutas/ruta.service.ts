import { Injectable } from '@angular/core';
import {RUTAS} from './rutas.json';
import {Ruta} from './ruta';
@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor() { }
  getRutas(): Ruta[]{ return RUTAS;}
}
