import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { ConfigService } from './config.service';
import { Observable, of } from '../../../node_modules/rxjs';
import { LoggerService } from '../core/logger.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {

  public xmlhttp = new XMLHttpRequest();

  constructor(
    private config: ConfigService,
    private logger: LoggerService,
    private http: Http) { 

  }

  public getCares(url: string, options?: boolean, useToken?: string): Observable<any> {
    this.logger.log(this.config.endpointCares + url);

    let httpOptions
    if(options){
      httpOptions = this.setRequestAuthorizationHeader('');
    }

    return this.http.get(this.config.endpointCares + url, httpOptions).pipe(
      tap(_ => this.log(url)),
      catchError(this.handleError<any>(url)));
  }

  public postCares(url: string, body: any, options?: boolean, useToken?: string): Observable<any> {
    this.logger.log(body);
    this.logger.log(this.config.endpointCares + url);

    if(options){
      
      const headers = new Headers({ 'Content-Type': 'application/json' });
      // headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Access-Control-Allow-Methods', 'POST, PUT, DELETE');
      // headers.append('Accept','application/json');
      // headers.append('Access-Control-Max-Age','1728000');
      // headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept');

      let httpOptions = new RequestOptions({ headers: headers });

      return this.http.post(this.config.endpointCares + url, JSON.stringify(body), httpOptions).pipe(
        tap(_ => this.log(JSON.stringify(body))),
        catchError(this.handleError<any>(JSON.stringify(body))));
        // .subscribe(status => this.logger.log(status));
    }
    else{
      return this.http.post(this.config.endpointCares + url, body).pipe(
        tap(_ => this.log(url)),
        catchError(this.handleError<any>(url)));
        // .subscribe(status => this.logger.log(status));
    }
    
  }


  public getCSP(url: string, options?: boolean, useToken?: string): Observable<any> {
    this.logger.log(this.config.endpointCSP + url);

    let httpOptions
    if(options){
      httpOptions = this.setRequestAuthorizationHeader('');
    }

    return this.http.get(this.config.endpointCSP + url, httpOptions).pipe(
      tap(_ => this.log(url)),
      catchError(this.handleError<any>(url)));
  }

  public postCSP(url: string, body: object, options?: boolean, useToken?: string): Observable<any> {
    this.logger.log(body);
    this.logger.log(this.config.endpointCSP + url);

    let httpOptions
    if(options){
      httpOptions = this.setRequestAuthorizationHeader('');
    }
    
    if(options){
      return this.http.post(this.config.endpointCSP + url, body, httpOptions).pipe(
        tap(_ => this.log(url)),
        catchError(this.handleError<any>(url)));
        // .subscribe(status => this.logger.log(status));
    }
    else{
      return this.http.post(this.config.endpointCSP + url, body).pipe(
        tap(_ => this.log(url)),
        catchError(this.handleError<any>(url)));
        // .subscribe(status => this.logger.log(status));
    }
    
  }

  private setRequestAuthorizationHeader(body: any, httpOptions?: RequestOptionsArgs): RequestOptionsArgs {
    
     const headers = new Headers({'Content-Type': 'application/json' });

    httpOptions = new RequestOptions({ headers: headers});

    return httpOptions;
  }

   /** Log a HeroService message with the MessageService */
   private log(message: string) {
    //  this.messageService.add('Data Service: ' + message);
    this.logger.log(message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
