import {Injectable } from '@angular/core';
import { config } from '../config/app.config';
import { apiConfig } from '../config/app-api.config';

@Injectable()
export class ConfigService {
  public envName: any;
  public production: boolean;
  public endpointCares: any;
  public endpointCSP: any;
  public api: any;

  constructor() { 
    //APP
    this.envName = config.envName;
    this.production = config.production;
    this.endpointCares = config.endpointCares;
    this.endpointCSP = config.endpointCSP;

    //API
    this.api = apiConfig;

  }
}
