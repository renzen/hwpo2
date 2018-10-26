import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerOtpComponent } from './customer-otp/customer-otp.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { AppRoutingModule } from './app.routing.module';
import { BannerComponent } from './shared/layout/banner/banner.component';

//Apps roots / HashLocationStrategy
const appRoots = [
  { path: '**', redirectTo: 'PageNotFoundComponent' } 
  ];

import { ConfigService } from './core/config.service';
import { LoggerService } from './core/logger.service';
import { HttpService } from './core/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CustomerInfoComponent,
    CustomerOtpComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoots),
  ],
  providers: [ConfigService, LoggerService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
