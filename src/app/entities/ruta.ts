import {Sucursal} from '../entities/sucursal';

export class Ruta {
  idRuta:number;
  precio: number;
  SucursalEmisor: Sucursal = new Sucursal();
  SucursalReceptor: Sucursal = new Sucursal();


}
