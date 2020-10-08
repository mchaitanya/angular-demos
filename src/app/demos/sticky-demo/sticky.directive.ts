import { Directive, ElementRef, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[sticky]'
})
export class StickyDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
        //
    }
    
    ngOnInit() {
        const host = <HTMLElement> this.el.nativeElement;
        console.log('sticky directive attached to ' + host.nodeName);
    }

}