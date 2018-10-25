import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

import { ConfigService } from './core/config.service';
import { LoggerService } from './core/logger.service';
import { HttpService } from './core/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ConfigService, LoggerService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
