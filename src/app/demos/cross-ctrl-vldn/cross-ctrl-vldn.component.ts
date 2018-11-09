import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidators } from './password-validators';

@Component({
    selector: 'demo-cross-ctrl-vldn', 
    templateUrl: './cross-ctrl-vldn.component.html'
})
export class CrossCtrlVldnComponent { 
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            'curPwd': new FormControl('', Validators.required), 
            'newPwd': new FormControl('', [
                Validators.required, 
                Validators.minLength(8), 
                PasswordValidators.containsUpperCase, 
                PasswordValidators.containsLowerCase, 
                PasswordValidators.containsDigit, 
                PasswordValidators.containsSpecialChar(['!', '@', '#'])
            ]), 
            'confirm': new FormControl('')
        });
    }

    get curPwd() { return this.form.get('curPwd'); }
    get newPwd() { return this.form.get('newPwd'); }

}