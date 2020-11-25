import { Categoria } from '../entities/categoria';
import { OrdenDeEnvio} from '../entities/orden-de-envio';

export class Paquete {
  idPaquete: number;
  codigo: number;
  descripcion: string;
  estado:boolean;
  fragilidad: boolean = false;
  peso: number;
  precioPaquete: number;
  categoria:Categoria = new Categoria();
  ordenDeEnvio:OrdenDeEnvio = new OrdenDeEnvio();

}
