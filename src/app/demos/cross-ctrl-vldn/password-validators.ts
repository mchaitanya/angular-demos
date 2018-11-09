import { ValidationErrors, FormControl } from '@angular/forms';

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
}