import { ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';

export class PasswordValidators { 
    static containsUpperCase(control: FormControl): ValidationErrors|null {
        return /[A-Z]/.test(control.value) ? null : { 'noUpperCase': true };
    }

    static containsLowerCase(control: FormControl): ValidationErrors|null {
        return /[a-z]/.test(control.value) ? null : { 'noLowerCase': true };
    }

    static containsDigit(control: FormControl): ValidationErrors|null {
        return /\d/.test(control.value) ? null : { 'noDigit': true };
    }

    static containsSpecialChar(specialChars: string[]): ValidatorFn {
        return (control: FormControl): ValidationErrors|null => {
            const regex = new RegExp('[' + specialChars.join() + ']');
            return regex.test(control.value) ? null : { 'noSpecialChar': true, specialChars };
        }
    }
}