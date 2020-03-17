import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { MoedaService , ConversorService} from './services';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ConversorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
  	ConversorComponent
  ],
  providers:[
  	MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
