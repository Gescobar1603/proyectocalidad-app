import {Paquete} from '../paquetes/paquete';
import {Cliente} from '../clientes/cliente';
import {Ruta} from '../rutas/ruta';

export class OrdenDeEnvio {
  idOrdenDeEnvio: number;
  clave: string;
  codigo: string;
  fechaEnvio: Date;
  precioTotal: number;
  Paquetes: Paquete[];
  clienteEmisor: Cliente;
  clienteReceptor: Cliente;
  ruta: Ruta;

}
