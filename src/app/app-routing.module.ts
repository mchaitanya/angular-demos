import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';

export const routedCmps = [
    HomeComponent, 
    DemosComponent
];

const routes: Routes = [
    { path: 'demos', component: DemosComponent }, 
    { path: 'home', component: HomeComponent }, 
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule { }