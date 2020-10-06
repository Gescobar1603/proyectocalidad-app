import { Component, OnInit } from '@angular/core';
import { OrdenDeEnvio } from './orden-de-envio';
import { OrdenDeEnvioService } from './orden-de-envio.service';

@Component({
  selector: 'app-ordenes-de-envios',
  templateUrl: './ordenes-de-envios.component.html',
  styleUrls: ['./ordenes-de-envios.component.css']
})
export class OrdenesDeEnviosComponent implements OnInit {

  ordenesDeEnvios: OrdenDeEnvio[];

  constructor(private ordenDeEnvioService: OrdenDeEnvioService) { }

  ngOnInit(){
    this.ordenesDeEnvios= this.ordenDeEnvioService.getOrdenesDeEnvios();
  }

}
