import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routedCmps } from './app-routing.module';

import { AppComponent } from './app.component';
import { StickyDirective } from './demos/sticky-demo/sticky.directive';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
