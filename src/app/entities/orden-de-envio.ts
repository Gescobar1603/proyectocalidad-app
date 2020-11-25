import {Paquete} from '../entities/paquete';
import {Cliente} from '../entities/cliente';
import {Ruta} from '../entities/ruta';

export class OrdenDeEnvio {
  idOrdenDeEnvio: number;
  clave: string;
  codigo: string;
  fechaEnvio: Date;
  precioTransporte: number=0;
  precioCategoria: number=0;
  precioTotal: number;
  paquetes: Paquete[]= new Array();
  clienteEmisor: Cliente = new Cliente();
  clienteReceptor: Cliente = new Cliente();
  ruta: Ruta = new Ruta();
}
