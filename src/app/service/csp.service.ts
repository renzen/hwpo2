import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { ConfigService } from '../core/config.service';
import { HttpService } from '../core/http.service';

@Injectable({
  providedIn: 'root'
})
export class CSPService {

  constructor(private http: HttpService,
    private config: ConfigService) { }

  createSR(body: any, options?: boolean, useToken?: string): Observable<any> {
    return this.http.postCSP(this.config.api.csp.createSR, body, options, useToken);
  }

}