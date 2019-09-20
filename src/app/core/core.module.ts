import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './logInterceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }]
})
export class CoreModule { }
