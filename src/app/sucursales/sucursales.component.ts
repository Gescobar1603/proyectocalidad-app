import { Component, OnInit } from '@angular/core';
import { Sucursal} from './sucursal';
import {SucursalService} from './sucursal.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  sucursales: Sucursal[];

  constructor(private sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.sucursales = this.sucursalService.getSucursales();
  }

}
