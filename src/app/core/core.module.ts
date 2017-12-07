import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestClientService } from './rest-client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [],
  providers: [
    RestClientService
  ]
})
export class CoreModule { }
