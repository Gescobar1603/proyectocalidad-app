import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../services/sucursal-service';
import { CategoriaService } from '../services/categoria-service';
import { ReportesGerencialesService } from '../services/reportes-gerenciales-service';
import { Paquete } from '../entities/paquete';
import { Sucursal } from '../entities/sucursal';
import { Cliente } from '../entities/cliente';
import { Categoria } from '../entities/categoria';
import { Ruta } from '../entities/ruta';
import swal from 'sweetalert2';

@Component({
  selector: 'app-reportes-gerenciales',
  templateUrl: '../views/reportes-gerenciales.html',
  styleUrls: ['../styles/reportes-gerenciales.css']
})
export class ReportesGerencialesController implements OnInit {
  sucursales: Sucursal[] = new Array();
  sucursal: Sucursal = new Sucursal();

  clientes: Cliente[] = new Array();
  clienteEmisor: Cliente = new Cliente();
  clienteReceptor: Cliente = new Cliente();

  categorias: Categoria[] = new Array();
  categoria: Categoria = new Categoria();
  ruta: Ruta = new Ruta();

  paquetesSucursal: Paquete[] = new Array();
  paquetesCategoria: Paquete[] = new Array();

  ingresoTotalSucursal: number = 0;
  ingresoTotalCategoria: number = 0;

  constructor(
    private sucursalService: SucursalService,
    private categoriaService: CategoriaService,
    private reportesGerencialesService: ReportesGerencialesService,
    ) { }

  ngOnInit(): void {
  }

  elegirSucursal(sucursal:Sucursal){

    this.sucursal = sucursal

    this.reportesGerencialesService.buscarPaquetesPorSucursal(this.sucursal.idSucursal).subscribe(
      paquetesSucursal => {this.paquetesSucursal = paquetesSucursal

        this.ingresoTotalSucursal = 0

        for(let paquete of this.paquetesSucursal){
            this.ingresoTotalSucursal = this.ingresoTotalSucursal + paquete.precioPaquete
        }

        if(this.ingresoTotalSucursal == 0 ){
          swal.fire({
            title:'La Sucursal no tiene paquetes!',
            text: `La sucursal ${this.sucursal.nombre} no tiene ningun paquete registrado` ,
            icon : "warning"
          }).then(() => {
              window.location.reload();
          });

        }
      }

    )

  }

  elegirCategoria(categoria: Categoria){

    this.categoria = categoria

    this.reportesGerencialesService.buscarPaquetesPorCategoria(this.categoria.idCategoria).subscribe(
      paquetesCategoria=> {this.paquetesCategoria = paquetesCategoria

      this.ingresoTotalCategoria = 0

      for(let paquete of this.paquetesCategoria){
        this.ingresoTotalCategoria = this.ingresoTotalCategoria + paquete.precioPaquete
      }
        if(this.ingresoTotalCategoria == 0 ){
          swal.fire({
            title:'La Categoria no tiene paquetes!',
            text: `La categoria ${this.categoria.tipoCategoria} no tiene ningun paquete registrado` ,
            icon : "warning"
            }).then(() => {
                window.location.reload();
            });

        }
      }

    )

}

  showSucursales(){
    this.sucursalService.getSucursals().subscribe(
      sucursales =>{this.sucursales = sucursales}
    );
  }

  showCategorias(){
    this.categoriaService.getCategorias().subscribe(
      categorias =>{this.categorias = categorias}
    );
  }

}
