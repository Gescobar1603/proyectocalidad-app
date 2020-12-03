import { Component, OnInit } from '@angular/core';
import { GestionesDeEntradasPaquetesService } from '../services/gestiones-de-entradas-paquetes-service'
import { Paquete } from '../entities/paquete';
import { OrdenDeEnvio } from '../entities/orden-de-envio';
import { Sucursal } from '../entities/sucursal';
import { Cliente } from '../entities/cliente';
import { Categoria } from '../entities/categoria';
import { Ruta } from '../entities/ruta';
import swal from 'sweetalert2';

@Component({
  selector: 'app-gestiones-de-entradas-paquetes',
  templateUrl: '../views/gestiones-de-entradas-paquetes.html'
})
export class GestionesDeEntradasPaquetesController implements OnInit {

  ordenDeEnvio: OrdenDeEnvio= new OrdenDeEnvio();
  ordenDeEnvioProcesada: OrdenDeEnvio = new OrdenDeEnvio();

  paquete: Paquete = new Paquete();
  paqueteProcesado: Paquete = new Paquete();

  paquetes: Paquete[] = new Array();
  paquetesProcesados: Paquete[] = new Array()

  sucursales: Sucursal[] = new Array();

  sucursalEmisor: Sucursal = new Sucursal();
  sucursalReceptor: Sucursal = new Sucursal();

  clientes: Cliente[] = new Array();
  clienteEmisor: Cliente = new Cliente();
  clienteReceptor: Cliente = new Cliente();

  categoria: Categoria = new Categoria();
  categoriaConPesoMaximoMasAlto: Categoria = new Categoria();
  ruta: Ruta = new Ruta();

  constructor(private gestionesDeEntradasPaquetesService: GestionesDeEntradasPaquetesService) { }

  ngOnInit(): void {
    this.gestionesDeEntradasPaquetesService.obtenerSucursales().subscribe(sucursales =>{this.sucursales = sucursales});
    this.gestionesDeEntradasPaquetesService.obtenerClientes().subscribe(clientes => {this.clientes = clientes});
    this.gestionesDeEntradasPaquetesService.buscarCategoriaConElPesoMaximoMasAlto().subscribe(categoriaConPesoMaximoMasAlto => {this.categoriaConPesoMaximoMasAlto = categoriaConPesoMaximoMasAlto});
  }

  agregarPaquete():void{

    if(this.paquete.peso > this.categoriaConPesoMaximoMasAlto.pesoMaximo){

      swal.fire({title: 'Peso Excedido',icon: 'error'})
      this.paquete = new Paquete()

    }else{

      swal.fire({title:'El Paquete ' +this.paquete.descripcion +' ha sido agregado correctamente',icon: 'success'})
      this.paquetes.push(this.paquete)
      this.paquete = new Paquete()

    }
   }

  eliminarPaquete(paquete: Paquete):void{

      swal.fire({
        title: 'Esta Seguro?',
        text: "No podra revertir la accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!!!'
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire('Eliminado!','El Paquete ha sido eliminado de la lista.','success')
          this.paquetes = this.paquetes.filter(item => item !== paquete);
        }
      })
     }

  elegirSucursalEmisor(sucursalaux: Sucursal): void {
     this.sucursalEmisor = sucursalaux
     this.ruta = new Ruta()
   }

  elegirSucursalReceptor(sucursalaux: Sucursal): void {
    this.sucursalReceptor = sucursalaux
    this.ruta = new Ruta()
  }

  elegirClienteEmisor(clienteEmisor: Cliente): void {
      this.clienteEmisor = clienteEmisor
  }

  elegirClienteReceptor(clienteReceptor: Cliente): void {
      this.clienteReceptor = clienteReceptor
  }

  procesarOrdenDeEnvio():void {

    if(this.validarIngresos().valueOf() == true && this.validarRuta().valueOf() == true){
        swal.fire({title:'La Orden se ha Procesado!',icon: 'success'})
        this.gestionesDeEntradasPaquetesService.cotizarPaquetes(this.paquetes).subscribe(
            paquetesProcesados => {
            this.ordenDeEnvio.paquetes = paquetesProcesados
            this.ordenDeEnvio.ruta = this.ruta
            this.ordenDeEnvio.clienteEmisor=this.clienteEmisor
            this.ordenDeEnvio.clienteReceptor = this.clienteReceptor
            this.gestionesDeEntradasPaquetesService.procesarOrden(this.ordenDeEnvio).subscribe(
              ordenDeEnvioProcesada =>{this.ordenDeEnvioProcesada = ordenDeEnvioProcesada}
            )
          }
        )
      }
  }

  guardarOrdenDeEnvio(){
    swal.fire({
      title: 'Estas Seguro?',
      text: "No podras revertir esta decision!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gestionesDeEntradasPaquetesService.guardarOrden(this.ordenDeEnvioProcesada).subscribe(
            ordenGuardada => {
            this.ordenDeEnvioProcesada = ordenGuardada
            swal.fire({
              title:'Orden de Envio Registrada!',
              text: `La orden de Envio ${this.ordenDeEnvioProcesada.codigo} ha sido regstrada correctamente` ,
              icon:"success"
              }).then(() => {window.location.reload()})
            }
        )
      }else{
        window.location.reload();
      }
    })

  }

  private validarIngresos(): boolean{

      if (this.paquetes.length == 0){

        swal.fire({title:'No hay paquetes para cotizar',icon: 'warning'})
        return false;

      }else if (this.clienteEmisor.nombres == "" ){

        swal.fire({title:'No se ha especificado un Cliente Emisor',icon: 'warning'})
        return false;

      }else if (this.clienteReceptor.nombres == "" ){

        swal.fire({title:'No se ha especificado un Cliente Receptor',icon: 'warning'})
        return false;

      }else if (this.sucursalEmisor.nombre == "" ){

          swal.fire({title:'No se ha especificado la Sucursal Emisor',icon: 'warning'})
          return false;

      }else if (this.sucursalReceptor.nombre == "" ){

          swal.fire({title:'No se ha especificado la Sucursal Receptor',icon: 'warning'})
          return false;

      }else if (this.sucursalEmisor.nombre == this.sucursalReceptor.nombre){

          swal.fire({title:'No se puede enviar a la misma sucursal',icon: 'warning'})
          return false;

      }
      return true;
    }

  private validarRuta(): boolean{

      this.gestionesDeEntradasPaquetesService.buscarRutaPorSucursales(this.sucursalEmisor.idSucursal,this.sucursalReceptor.idSucursal).subscribe(
        ruta => {
          this.ruta = ruta

          if(this.ruta == new Ruta() || this.ruta == undefined || this.ruta == null) {

            swal.fire({title:`No se puede enviar de ${this.sucursalEmisor.nombre} a ${this.sucursalReceptor.nombre}`,icon: 'error'})
            return false;

          }
            return true;
        })
      return true;
    }
}
