import { Component, OnInit, Directive, ElementRef, Renderer } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { compareValidator } from '../shared/compare-validator.directive';
import { HttpService } from '../core/http.service';
import { OTPGenerator } from '../config/app-model.config';
import { ConfigService } from '../core/config.service';
import { LoggerService } from '../core/logger.service';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})

export class CustomerInfoComponent implements OnInit {

    customerInform: FormGroup;
    loading =  false;
    submitted = false;
    isValidFormSubmitted = false;
    OTP : OTPGenerator;
    
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpService,
    private apiService: ConfigService,
    private logger: LoggerService
    ) { }

  ngOnInit() {
    this.createCustomer();

  }

  createCustomer(){
    this.customerInform = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, compareValidator('email')]],
      nbl: ['', Validators.required],
      svb: ['', Validators.required],
      street: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      mobileNo: ['', Validators.required],
      landlineNo: ['', Validators.required],
      relationship: ['', Validators.required],
      Remarks:[],
      
    })
    
  }


  get firstName() {
    return this.customerInform.get('firstName');
  }
  get middleName() {
    return this.customerInform.get('middleName');
  } 
  get lastName() {
    return this.customerInform.get('lastName');
  } 
  
  get email() {
    return this.customerInform.get('email');
  }
  get emailConfirm() {
    return this.customerInform.get('emailConfirm');
  }
  get nbl() {
    return this.customerInform.get('nbl');
  } 
  get svb() {
    return this.customerInform.get('svb');
  } 
  get street() {
    return this.customerInform.get('street');
  } 
  get province() {
    return this.customerInform.get('province');
  } 
  get city() {
    return this.customerInform.get('city');
  } 
  get zipCode() {
    return this.customerInform.get('zipCode');
  } 
  get mobileNo() {
    return this.customerInform.get('mobileNo');
  } 
  get landlineNo() {
    return this.customerInform.get('landlineNo');
  } 
  get relationship() {
    return this.customerInform.get('relationship');
  } 
  get Remarks() {
    return this.customerInform.get('Remarks');
  } 
  


  onSubmit(model:any) {
    alert(JSON.stringify(model));
    // stop here if form is invalid
    if (this.customerInform.invalid) {
        return;
    }


    // this.customerInform.value()
    // 
    this.isValidFormSubmitted = true;
    this.loading = true;

    const a: OTPGenerator = {
      Sender: this.apiService.constapicfg.OTPSender,
      Account_No: '1111111111',
      Mobile_No: model.mobileNo,
      SpielCode: this.apiService.constapicfg.OTPSpielCode 
    };
    this.http.postCares(this.apiService.api.cares.getOTP, a, true).subscribe(
      res => {
        this.logger.log(res);
      }
    );
    this.router.navigate(['/customer-otp']);

    console.log(this.customerInform);
}

}
