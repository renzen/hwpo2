import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable()
export class LoggerService {

  constructor(private config: ConfigService) {
    
   }

   log(msg: any, data?: any): void {
     if (this.config.production) {
       return;
     }
     if (data) {
       console.log(msg, data);
     } else {
      console.log(msg);
     }
   }

   error(msg: any, data?: any): void {
     if (data) {
       console.log(msg, data);
     } else {
       console.error(msg);
     }
   }
}
