import { Directive, ElementRef, Renderer2, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { fromEvent, Subscription } from 'rxjs';

@Directive({
    selector: '[sticky]'
})
export class StickyDirective implements OnInit, OnDestroy {
    private sub: Subscription;

    constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
        //
    }
    
    ngOnInit() {
        const host = <HTMLElement> this.el.nativeElement;
        console.log('sticky directive attached to ' + host.nodeName);

        if (this.document) {
            const window: Window = this.document.defaultView;
            this.sub
             = fromEvent(window, 'scroll')
                .subscribe((ev: Event) => console.log(ev));
        }

    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

}