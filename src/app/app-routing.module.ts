import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CrossCtrlVldnComponent } from './demos/cross-ctrl-vldn/cross-ctrl-vldn.component';

export const routedCmps = [
    HomeComponent, 
    DemosComponent, 
    CrossCtrlVldnComponent
];

const routes: Routes = [
    { 
        path: 'demos', 
        component: DemosComponent, 
        children: [
            { path: 'cross-ctrl-vldn', component: CrossCtrlVldnComponent }, 
            { path: '', redirectTo: '/home', pathMatch: 'full'} 
        ]
    }, 
    { path: 'home', component: HomeComponent }, 
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule { }