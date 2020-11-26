import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../services/sucursal-service';
import { CategoriaService } from '../services/categoria-service';
import { ReportesGerencialesService } from '../services/reportes-gerenciales-service';
import { Paquete } from '../entities/paquete';
import { Sucursal } from '../entities/sucursal';
import { Categoria } from '../entities/categoria';

import swal from 'sweetalert2';

@Component({
  selector: 'app-reportes-gerenciales',
  templateUrl: '../views/reportes-gerenciales.html'
})
export class ReportesGerencialesController implements OnInit {

  sucursales: Sucursal[] = new Array();

  categorias: Categoria[] = new Array();

  paquetesSucursal: Paquete[] = new Array();
  paquetesCategoria: Paquete[] = new Array();

  ingresoTotalSucursal: number = 0;
  ingresoTotalCategoria: number = 0;

  constructor(private sucursalService: SucursalService,
    private categoriaService: CategoriaService,
    private reportesGerencialesService: ReportesGerencialesService,
    ) { }

  ngOnInit(): void {
    this.sucursalService.obtenerSucursales().subscribe( sucursales =>{this.sucursales = sucursales});
    this.categoriaService.obtenerCategorias().subscribe( categorias =>{this.categorias = categorias});
  }

  reportarPaquetesDeSucursal(sucursal:Sucursal){

    this.reportesGerencialesService.buscarPaquetesPorSucursal(sucursal.idSucursal).subscribe(
      paquetesSucursal => {

        this.paquetesSucursal = paquetesSucursal

        if(this.paquetesSucursal.length == 0){
          swal.fire({
            title:'La Sucursal no tiene paquetes!',
            text: `La sucursal ${sucursal.nombre} no tiene ningun paquete registrado` ,
            icon : "warning"
          }).then(() => {window.location.reload()})

        }else{

          this.ingresoTotalSucursal = 0
          for(let paquete of this.paquetesSucursal) this.ingresoTotalSucursal = this.ingresoTotalSucursal + paquete.precioPaquete

        }
      })

  }

  reportarPaquetesDeCategoria(categoria: Categoria){
    this.reportesGerencialesService.buscarPaquetesPorCategoria(categoria.idCategoria).subscribe(
      paquetesCategoria=> {
        this.paquetesCategoria = paquetesCategoria

        if(this.paquetesCategoria.length == 0 ){
          swal.fire({
            title:"La Categoria no tiene paquetes!",
            text: `La categoria ${categoria.tipoCategoria} no tiene ningun paquete registrado` ,
            icon : "warning"
            }).then(() => {window.location.reload()});
        }else{
          this.ingresoTotalCategoria = 0

          for(let paquete of this.paquetesCategoria) this.ingresoTotalCategoria = this.ingresoTotalCategoria + paquete.precioPaquete
        }
      }

    )
  }

}
