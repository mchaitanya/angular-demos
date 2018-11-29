import { ValidationErrors, ValidatorFn, FormGroup, FormControl } from '@angular/forms';

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
        };
    }

    static diffFrom(field: string, fieldToCompareWith: string): ValidatorFn {
        return (group: FormGroup): ValidationErrors|null => {
            const value = group.value[field] || '';
            const valueToCompareWith = group.value[fieldToCompareWith] || '';

            const control = group.controls[field];
            const errors = control.errors || {}; // `control.errors` may be null
            let newErrors = null;
            if (valueToCompareWith !== '' && value === valueToCompareWith) {
                newErrors = Object.assign(errors, { 'notDiff': true });
            } else {
                for (const e in errors) {
                    if (errors.hasOwnProperty(e) && e !== 'notDiff') {
                        if (!newErrors) newErrors = { };
                        newErrors[e] = errors[e];
                    }
                }
            }
            // to indicate a valid state, the error object must be nulled
            // Angular doesn't treat an empty object the same way
            control.setErrors(newErrors);
            return null;
        };
    }

    static sameAs(field: string, fieldToCompareWith: string): ValidatorFn {
        return (group: FormGroup): ValidationErrors|null => {
            const value = group.value[field] || '';
            const valueToCompareWith = group.value[fieldToCompareWith] || '';

            const control = group.controls[field];
            const errors = control.errors || {};
            let newErrors = null;
            if (valueToCompareWith !== '' && value !== valueToCompareWith) {
                newErrors = Object.assign(errors, { 'notSame': true });
            } else {
                for (const e in errors) {
                    if (errors.hasOwnProperty(e) && e !== 'notSame') {
                        if (!newErrors) newErrors = { };
                        newErrors[e] = errors[e];
                    }
                }
            }
            control.setErrors(newErrors);
            return null;
        };
    }
}
