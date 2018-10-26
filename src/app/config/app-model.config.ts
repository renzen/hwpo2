export interface AppConfig {
    production: boolean;
    envName: string;
    endpointCares: string;
    endpointCSP: string;
  }

export interface ApiConfig {
    defaults?: any;
    cares?: any;
    csp?: any;
  }

  export interface ConstantsConfig {
    OTPSender?: any;
    OTPSpielCode?: any;
  }


  export interface OTPGenerator {
      Sender: string;
      Account_No: string;
      Mobile_No: string;
      SpielCode: string;
  }

  export interface OTPVerification {
      Account_No: string;
      OTPCode: string;
  }

  export interface CustomerInformation{
      id: number;
      firstName: string;
      middleName: string;
      lastName: string;
      email: string;
      nbl: string;
      svb: string;
      street: string;
      province: string;
      city: string;
      zipCode: number;
      mobileNo: string;
      landlineNo: number;
      relationship: string;
      Remarks: string;
  }


  