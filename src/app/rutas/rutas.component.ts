import { Component, OnInit } from '@angular/core';
import {Ruta} from './ruta';
import {RutaService} from './ruta.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  rutas: Ruta[];

  constructor(private rutaService: RutaService) { }

  ngOnInit(): void {
    this.rutas=this.rutaService.getRutas();
  }

}
