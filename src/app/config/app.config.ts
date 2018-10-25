import { environment } from '../../environments/environment';
import { AppConfig } from '../config/app-model.config';

export const config: AppConfig = {
  production: environment.production,
  envName: environment.envName,
  endpointCares: environment.endpointCares,
  endpointCSP: environment.endpointCSP
};
