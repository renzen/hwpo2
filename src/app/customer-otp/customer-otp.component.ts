import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../core/http.service';
import { OTPVerification } from '../config/app-model.config';
import { ConfigService } from '../core/config.service';
import { LoggerService } from '../core/logger.service';



@Component({
  selector: 'app-customer-otp',
  templateUrl: './customer-otp.component.html',
  styleUrls: ['./customer-otp.component.css']
})
export class CustomerOtpComponent implements OnInit {

  OtpForm: FormGroup;
  loading =  false;
  submitted = false;
  isValidFormSubmitted = false;
  inValidFormSubmitted = false;

constructor(
  private formBuilder: FormBuilder,
  private http: HttpService,
  private apiService: ConfigService,
  private logger: LoggerService
  ) { }

ngOnInit() {
  this.insertOTP();
}

insertOTP(){
  this.OtpForm = this.formBuilder.group({
    otpNumber: ['', [Validators.required, Validators.minLength(6)]]
    
  })

}

get otpNumber() {
  return this.OtpForm.get('otpNumber');
}



onSubmit(model:any) {
  
  // stop here if form is invalid
  if (this.OtpForm.invalid) {
      return;
  }

  this.loading = true;
  
  const a: OTPVerification = {
    Account_No: '',
    OTPCode: model.otpNumber
   };

  this.http.postCares(this.apiService.api.cares.verifyOTP, a, true).subscribe(res => {
    if (res._body == 'SUCCESS') {
     this.isValidFormSubmitted = true;
     this.loading = false;
    }
    else {
      this.inValidFormSubmitted = true;
      this.loading = false;
      this.logger.log(res);
      }
      
    }
  );
  
}

}
