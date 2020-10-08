import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
//------------------------------------------------------------------
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { FormComponentClientes } from './clientes/form.component'
//------------------------------------------------------------------
import { RutasComponent } from './rutas/rutas.component';
import { RutaService } from './rutas/ruta.service';
import { FormComponentRutas } from './rutas/form.component';
//------------------------------------------------------------------
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaService } from './categorias/categoria.service';
import { FormComponentCategorias } from './categorias/form.component';
//------------------------------------------------------------------
import { SucursalesComponent } from './sucursales/sucursales.component';
import { SucursalService } from './sucursales/sucursal.service';
import { FormComponentSucursales } from './sucursales/form.component';
//------------------------------------------------------------------
import { PaquetesComponent } from './paquetes/paquetes.component';
import { PaqueteService } from './paquetes/paquete.service';
import { FormComponentPaquetes } from './paquetes/form.component';
//------------------------------------------------------------------
import { OrdenesDeEnviosComponent } from './ordenes-de-envios/ordenes-de-envios.component';
import { OrdenDeEnvioService } from './ordenes-de-envios/orden-de-envio.service';
import { FormComponentOrdenesDeEnvios } from './ordenes-de-envios/form.component';
//------------------------------------------------------------------
const routes: Routes = [
  {path: '', redirectTo: '/Clientes', pathMatch: 'full'},
  {path: 'Clientes', component: ClientesComponent},
  {path: 'Clientes/form', component: FormComponentClientes},
  {path: 'Rutas', component: RutasComponent},
  {path: 'Rutas/form', component: FormComponentRutas},
  {path: 'Paquetes', component: PaquetesComponent},
  {path: 'Paquetes/form', component: FormComponentPaquetes},
  {path: 'Categorias', component: CategoriasComponent},
  {path: 'Categorias/form', component: FormComponentCategorias},
  {path: 'Sucursales', component: SucursalesComponent},
  {path: 'Sucursales/form', component: FormComponentCategorias},
  {path: 'OrdenesdeEnvio', component: OrdenesDeEnviosComponent},
  {path: 'OrdenesdeEnvio/form', component: FormComponentOrdenesDeEnvios},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, //cabecera
    FooterComponent,//pie de pagina
    ClientesComponent,
    RutasComponent,
    CategoriasComponent,
    SucursalesComponent,
    PaquetesComponent,
    OrdenesDeEnviosComponent,
    FormComponentRutas,
    FormComponentClientes,
    FormComponentPaquetes,
    FormComponentCategorias,
    FormComponentSucursales,
    FormComponentOrdenesDeEnvios
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [
    ClienteService,RutaService,CategoriaService,SucursalService,PaqueteService,OrdenDeEnvioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
