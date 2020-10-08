import { Component, TemplateRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalDfn, ModalService } from './demos/reusable-modals/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit { 
  modalDfn$: Observable<ModalDfn>;

  constructor(private modalService: ModalService) {
    //
  }

  ngOnInit() {
    this.modalDfn$ = this.modalService.modalDfn$;
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

}
