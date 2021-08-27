import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    ComunesComponent,
    OrdenarComponent,
    MayusculasPipe,
    OrdenarPipe,
    VuelaPipe
    
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    ComunesComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
