import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routedCmps } from './app-routing.module';

import { AppComponent } from './app.component';
import { StickyDirective } from './demos/sticky-demo/sticky.directive';
import { ModalService } from './demos/reusable-modals/modal.service';

@NgModule({
  declarations: [
    AppComponent, 
    StickyDirective, 
    ...routedCmps
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
