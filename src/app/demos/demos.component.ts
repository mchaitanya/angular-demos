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
        // the routes are of the form '/demos/demo-id'
        const demoId = this.router.url.split('/')[2];
        this.selectCtrl.setValue(demoId);
        this.selectCtrl.valueChanges
            .subscribe(v => this.router.navigate(['./', v], { relativeTo: this.route }));
    }
}
