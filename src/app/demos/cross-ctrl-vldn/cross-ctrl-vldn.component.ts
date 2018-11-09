import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'demo-cross-ctrl-vldn', 
    templateUrl: './cross-ctrl-vldn.component.html'
})
export class CrossCtrlVldnComponent { 
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            'curPwd': new FormControl('', Validators.required), 
            'newPwd': new FormControl(''), 
            'confirm': new FormControl('')
        });
    }

    get curPwd() { return this.form.get('curPwd'); }

}