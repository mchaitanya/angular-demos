import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-demos',
    templateUrl: './demos.component.html'
})
export class DemosComponent implements OnInit {
    selectCtrl = new FormControl('');
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        const url = this.router.url;
        // the url can be of the form '/demos/demo-id#fragment'
        const sliceStart = url.lastIndexOf('/') + 1;
        const sliceEnd = url.includes('#') ? url.indexOf('#') : url.length;
        const demoId = url.slice(sliceStart, sliceEnd);
        
        this.selectCtrl.setValue(demoId);
        this.selectCtrl.valueChanges
            .subscribe(v => this.router.navigate(['./', v], { relativeTo: this.route }));
    }
}
