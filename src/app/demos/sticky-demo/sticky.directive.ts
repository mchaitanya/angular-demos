import { Directive, ElementRef, Renderer2, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { fromEvent, merge, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
    selector: '[sticky]', 
    exportAs: 'sticky'
})
export class StickyDirective implements OnInit, OnDestroy {
    public isPinned = false;
    private sub: Subscription;

    constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
        //
    }
    
    ngOnInit() {
        // we insert an empty div before the host element
        // the purpose of the div is to mark the scroll position on crossing which we manipulate the style of the host element
        // if we're scrolling down, and we scroll past the marker, we'll fix the host
        // if we're scrolling up, and we scroll past the marker, we'll unfix the host
        const marker: HTMLElement = this.renderer.createElement('div');
        const parent: HTMLElement = this.renderer.parentNode(this.el.nativeElement);
        this.renderer.insertBefore(parent, marker, this.el.nativeElement);

        if (this.document) {
            const window: Window = this.document.defaultView;
            this.sub
             = merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'))
                .pipe(debounceTime(200))
                .subscribe(_ => {
                    if (window.pageYOffset < marker.offsetTop) {
                        // we have yet to scroll past the marker
                        this.isPinned = false;
                        this.renderer.setProperty(
                            this.el.nativeElement, 
                            'style', 
                            'position:static; width:auto'
                        );
                    } else {
                        this.isPinned = true;
                        this.renderer.setProperty(
                            this.el.nativeElement, 
                            'style', 
                            `position:fixed; top:0; left:${marker.offsetLeft}px; width:${marker.offsetWidth}px; background:#fff; z-index:100`
                        );
                    }
                });
        }

    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

}