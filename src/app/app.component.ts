import { Component, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalDfn, ModalService } from './demos/reusable-modals/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy { 
  modalDfn: ModalDfn;
  sub: Subscription;

  constructor(private modalService: ModalService) {
    //
  }

  ngOnInit() {
    this.sub
     = this.modalService.modalDfn$
        .subscribe((modalDfn: ModalDfn) => this.modalDfn = modalDfn);
  }

  openModal(title: string, modalBody: TemplateRef<any>, modalFooter: TemplateRef<any>) {
    this.modalService.openModal({
      title: title, 
      body: modalBody, 
      footer: modalFooter
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
