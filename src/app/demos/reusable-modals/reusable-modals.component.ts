import { Component, TemplateRef } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
    selector: 'app-reusable-modals', 
    templateUrl: './reusable-modals.component.html'
})
export class ReusableModalsComponent {
    constructor(private modalService: ModalService) {
        //
    }

    openModal(title: string, bodyTmpl: TemplateRef<any>, footerTmpl: TemplateRef<any>) {
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