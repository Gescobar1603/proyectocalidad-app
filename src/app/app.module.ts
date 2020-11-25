import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HeaderController} from './controllers/header-controller';
import {FooterController} from './controllers/footer-controller';
import { GestionesDeEntradasPaquetesController } from './controllers/gestiones-de-entradas-paquetes-controller';
import { ReportesGerencialesController } from './controllers/reportes-gerenciales-controller';

import { ClienteService } from './services/cliente-service';
import { RutaService } from './services/ruta-service';
import { CategoriaService } from './services/categoria-service';
import { SucursalService } from './services/sucursal-service';
import { PaqueteService } from './services/paquete-service';
import { OrdenDeEnvioService } from './services/orden-de-envio-service';
import { GestionesDeEntradasPaquetesService } from './services/gestiones-de-entradas-paquetes-service';
import { ReportesGerencialesService } from './services/reportes-gerenciales-service';

const routes: Routes = [
  {path: '', redirectTo: '/GestionesDeEntradasPaquetes', pathMatch: 'full'},
  {path: 'GestionesDeEntradasPaquetes', component: GestionesDeEntradasPaquetesController},
  {path: 'ReportesGerenciales', component: ReportesGerencialesController},
  {path: 'GestionesDeEntradasPaquetes/form', component: GestionesDeEntradasPaquetesController},
  {path: 'ReportesGerenciales/form', component: ReportesGerencialesController}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderController,
    FooterController,
    GestionesDeEntradasPaquetesController,
    ReportesGerencialesController
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes),

  ],
  providers: [
    ClienteService,
    RutaService,
    CategoriaService,
    SucursalService,
    PaqueteService,
    OrdenDeEnvioService,
    GestionesDeEntradasPaquetesService,
    ReportesGerencialesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
