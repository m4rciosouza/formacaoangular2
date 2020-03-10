import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';

import { MoedaService , ConversorService} from './services';

@NgModule({
  declarations: [ConversorComponent],
  imports: [
    CommonModule,
    HttpModule
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
