import { Component } from '@angular/core';
import { ConfigService } from './core/config.service';
import { LoggerService} from './core/logger.service';
import { OTPGenerator } from './config/app-model.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hwpo-cod-app';

  private payload: OTPGenerator;
  
  constructor(public config: ConfigService, private logger: LoggerService){

    logger.log('Is Production:', config.production || 'false');
    logger.log('Environment:', config.envName);
    logger.log('API Cares:', config.endpointCares);
    logger.log('API CSP:', config.endpointCSP);

  }

  public ngOnDestroy(){

  }

  public ngOnInit() {

  }
}
