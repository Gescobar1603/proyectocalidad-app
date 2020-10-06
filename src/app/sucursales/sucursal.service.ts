import { Injectable } from '@angular/core';
import { SUCURSALES } from './sucursales.json';
import { Sucursal } from './sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor() { }

  getSucursales(): Sucursal[]{return SUCURSALES;}
}
