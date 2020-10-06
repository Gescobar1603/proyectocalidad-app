import { Component, OnInit } from '@angular/core';
import { Paquete} from './paquete';
import { PaqueteService  } from './paquete.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  paquetes: Paquete[];

  constructor(private paqueteService: PaqueteService) { }

  ngOnInit(): void {
    this.paquetes= this.paqueteService.getPaquetes();
  }

}
