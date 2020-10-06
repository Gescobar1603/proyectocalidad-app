import { Categoria } from '../categorias/categoria';
import { OrdenDeEnvio} from '../ordenes-de-envios/orden-de-envio';

export class Paquete {
  idPaquete: number;
  codigo: number;
  descripcion: string;
  estado:boolean;
  fragilidad: boolean;
  peso: number;
  categoria:Categoria;
  ordenDeEnvio:OrdenDeEnvio;

}
