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

    displayWarning(warningTmpl: TemplateRef<any>) {
        this.modalService.openModal({
            title: 'Warning', 
            body: warningTmpl
        });
    }

}