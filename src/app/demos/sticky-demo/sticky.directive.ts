import { Directive, OnInit } from '@angular/core';

@Directive({
    selector: '[sticky]'
})
export class StickyDirective implements OnInit {
    
    ngOnInit() {
        console.log('sticky directive attached');
    }

}