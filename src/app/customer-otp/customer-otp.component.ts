import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



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

constructor(private formBuilder: FormBuilder) { }

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



onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.OtpForm.invalid) {
      return;
  }

  this.loading = true;
  this.isValidFormSubmitted = true;
  // this.OtpForm.value()
  alert('SWAK!! :-)')
}

}
