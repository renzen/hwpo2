import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ConfigService } from '../core/config.service';
import { HttpService } from '../core/http.service';

@Injectable({
  providedIn: 'root'
})
export class CaresService {

  constructor(private http: HttpService,
    private config: ConfigService) { }

  createOTP(body: any, options?: boolean, useToken?: string): Observable<any> {
    return this.http.postCares(this.config.api.cares.getOTP, body, options, useToken);
  }

  verifyOTP(body: any, options?: boolean, useToken?: string): Observable<any> {
    return this.http.postCares(this.config.api.cares.verifyOTP, body, options, useToken);
  }
}
