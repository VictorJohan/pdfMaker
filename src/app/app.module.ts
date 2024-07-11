import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FacturaDetalleComponent } from './componentes/factura-detalle/factura-detalle.component';
import { FuncionesFacturacionComponent } from './componentes/funciones-facturacion/funciones-facturacion.component';
import { TotalizacionFacturaComponent } from './componentes/totalizacion-factura/totalizacion-factura.component';
import { AccesosFacturaComponent } from './componentes/accesos-factura/accesos-factura.component';
import { FuncionBtnComponent } from './funcion-btn/funcion-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaDetalleComponent,
    FuncionesFacturacionComponent,
    TotalizacionFacturaComponent,
    AccesosFacturaComponent,
    FuncionBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// EPSON TM-T20III Receipt