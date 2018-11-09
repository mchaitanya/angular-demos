import { Component } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'demo-cross-ctrl-vldn', 
    templateUrl: './cross-ctrl-vldn.component.html'
})
export class CrossCtrlVldnComponent { 
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            'curPwd': new FormControl(''), 
            'newPwd': new FormControl(''), 
            'confirm': new FormControl('')
        });
    }
    
}