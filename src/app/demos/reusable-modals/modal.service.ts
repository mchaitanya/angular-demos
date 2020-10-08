import { Injectable, TemplateRef } from "@angular/core";

import { Subject } from 'rxjs';

export interface ModalDfn {
    title: string;
    body: TemplateRef<any>;
    footer?: TemplateRef<any>;
}

@Injectable()
export class ModalService {
    private _modalDfn$ = new Subject<ModalDfn>();
    public modalDfn$ = this._modalDfn$.asObservable();

    openModal(modal: ModalDfn) {
        this._modalDfn$.next(modal);
    }

    closeModal() {
        this._modalDfn$.next(null);
    }

}