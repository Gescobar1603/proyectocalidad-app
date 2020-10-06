import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
//------------------------------------------------------------------
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
//------------------------------------------------------------------
import { RutasComponent } from './rutas/rutas.component';
import { RutaService } from './rutas/ruta.service';
//------------------------------------------------------------------
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaService} from './categorias/categoria.service';
//------------------------------------------------------------------
import { SucursalesComponent } from './sucursales/sucursales.component';
import { SucursalService} from './sucursales/sucursal.service';
//------------------------------------------------------------------
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PaqueteService} from './paquetes/paquete.service';
//------------------------------------------------------------------
import { OrdenesDeEnviosComponent } from './ordenes-de-envios/ordenes-de-envios.component';
import { OrdenDeEnvioService } from './ordenes-de-envios/orden-de-envio.service';
//------------------------------------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, //cabecera
    FooterComponent,//pie de pagina
    ClientesComponent, RutasComponent, CategoriasComponent, SucursalesComponent, PaquetesComponent, OrdenesDeEnviosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ClienteService,RutaService,CategoriaService,SucursalService,PaqueteService,OrdenDeEnvioService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
