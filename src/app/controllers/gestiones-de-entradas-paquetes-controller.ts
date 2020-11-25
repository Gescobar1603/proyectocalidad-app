import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../services/sucursal-service';
import { ClienteService } from '../services/cliente-service';
import { GestionesDeEntradasPaquetesService } from '../services/gestiones-de-entradas-paquetes-service'
import { RutaService } from '../services/ruta-service';
import { Paquete } from '../entities/paquete';
import { OrdenDeEnvio } from '../entities/orden-de-envio';
import { Sucursal } from '../entities/sucursal';
import { Cliente } from '../entities/cliente';
import { Categoria } from '../entities/categoria';
import { Ruta } from '../entities/ruta';
import swal from 'sweetalert2';


@Component({
  selector: 'app-gestiones-de-entradas-paquetes',
  templateUrl: '../views/gestiones-de-entradas-paquetes.html',
  styleUrls: ['../styles/gestiones-de-entradas-paquetes.css']
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

  ruta: Ruta = new Ruta();

  constructor(
    private sucursalService: SucursalService,
    private clienteService: ClienteService,
    private rutaService: RutaService,
    private gestionesDeEntradasPaquetesService: GestionesDeEntradasPaquetesService,
   ) { }

  ngOnInit(): void {
    this.sucursalService.getSucursals().subscribe(sucursales =>{this.sucursales = sucursales});
    this.clienteService.getClientes().subscribe(clientes => {this.clientes = clientes});

  }

  agregarPaquete():void{
    if(this.paquete.peso > 150){
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
   }

  elegirSucursalReceptor(sucursalaux: Sucursal): void {
    this.sucursalReceptor = sucursalaux
  }

  elegirClienteEmisor(clienteEmisor: Cliente): void {
      this.clienteEmisor = clienteEmisor
  }

  elegirClienteReceptor(clienteReceptor: Cliente): void {
      this.clienteReceptor = clienteReceptor
  }

  procesarOrden():void {


    if(this.clienteEmisor.nombres == "" || this.clienteReceptor.nombres == ""){
      if(this.clienteEmisor.nombres == "" ){
        swal.fire({
          title:'No se ha especificado un Cliente Emisor',
          icon: 'error'
          }
        )
      }
      if(this.clienteReceptor.nombres == "" ){
        swal.fire({
          title:'No se ha especificado un Cliente Receptor',
          icon: 'error'
          }
        )
      }
    }else{
      if(this.sucursalEmisor.nombre == ""  || this.sucursalReceptor.nombre == "" || this.sucursalEmisor.nombre == this.sucursalReceptor.nombre ){
        if(this.sucursalEmisor.nombre == "" ){
          swal.fire({
                title:'No se ha especificado la Sucursal Emisor',
                icon: 'error'
            })
        }
        if(this.sucursalReceptor.nombre == "" ){
          swal.fire({
                title:'No se ha especificado la Sucursal Receptor',
                icon: 'error'
            })
        }
        if(this.sucursalEmisor.nombre == this.sucursalReceptor.nombre){
          swal.fire({
                title:'No se puede enviar a la misma sucursal',
                icon: 'error'
            })
        }

      }else{
        this.rutaService.getRutaPorSucursales(this.sucursalEmisor.idSucursal,this.sucursalReceptor.idSucursal).subscribe(
          ruta => {this.ruta = ruta
            if(this.ruta == new Ruta() || this.ruta == undefined || this.ruta == null){
              swal.fire({
                    title:`No se puede enviar de ${this.sucursalEmisor.nombre} a ${this.sucursalReceptor.nombre}`,
                    icon: 'error'
                })
                console.log("Error en la Ruta");
            }else{
              swal.fire({
                title:'La Orden se ha Procesado!',
                icon: 'success'
                }
              )
              this.gestionesDeEntradasPaquetesService.cotizarPaquete(this.paquetes).subscribe(
                  paquetesProc => {this.ordenDeEnvio.paquetes = paquetesProc
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
        )

      }
    }
  }

  guardarOrden(){
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
            ordenGuardada => {this.ordenDeEnvioProcesada = ordenGuardada
              swal.fire({
                title:'Orden de Envio Registrada!',
                text: `La orden de Envio ${this.ordenDeEnvioProcesada.codigo} ha sido registrada correctamente` ,
                icon:"success"
              }).then(() => {
                window.location.reload();
              });
            }
        )
      }else{
        window.location.reload();
      }
    })

  }

  private validar(): boolean{

    return true;
  }

}
