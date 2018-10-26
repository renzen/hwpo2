import {AbstractControl} from '@angular/forms';
export class EqualValidation {

    static MatchEmail(AC: AbstractControl) {
       let email = AC.get('email').value; // to get value in input tag
       let ConfirmEmail = AC.get('ConfirmEmail').value; // to get value in input tag
        if(email != ConfirmEmail) {
            console.log('false');
            AC.get('ConfirmEmail').setErrors( {MatchEmail: true} )
        } else {
            console.log('true');
            return null
        }
    }
  }