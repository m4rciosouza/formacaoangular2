import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { HttpClientModuel } from '@angular/common/http';
import { MoedaService , ConversorService} from './services';

@NgModule({
  declarations: [ConversorComponent],
  imports: [
    CommonModule,
    HttpClientModule
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
