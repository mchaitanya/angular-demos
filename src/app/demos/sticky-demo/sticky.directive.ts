import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[sticky]'
})
export class StickyDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        //
    }
    
    ngOnInit() {
        const host = <HTMLElement> this.el.nativeElement;
        console.log('sticky directive attached to ' + host.nodeName);
    }

}