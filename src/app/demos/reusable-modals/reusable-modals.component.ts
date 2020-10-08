import { Component, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ModalService } from './modal.service';

@Component({
    selector: 'app-reusable-modals', 
    templateUrl: './reusable-modals.component.html'
})
export class ReusableModalsComponent {
    fontSizeCtrl: FormControl;

    constructor(private modalService: ModalService) {
        this.fontSizeCtrl = new FormControl(16);
    }

    openModal(title: string, bodyTmpl: TemplateRef<any>, footerTmpl?: TemplateRef<any>) {
        this.modalService.openModal({
            title: title, 
            body: bodyTmpl, 
            footer: footerTmpl
        });
    }

    closeModal() {
        this.modalService.closeModal();
    }

}