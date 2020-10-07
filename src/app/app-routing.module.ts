import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CrossCtrlVldnComponent } from './demos/cross-ctrl-vldn/cross-ctrl-vldn.component';
import { StickyDemoComponent } from './demos/sticky-demo/sticky-demo.component';

export const routedCmps = [
    HomeComponent,
    DemosComponent,
    CrossCtrlVldnComponent, 
    StickyDemoComponent
];

const routes: Routes = [
    {
        path: 'demos',
        component: DemosComponent,
        children: [
            { path: 'cross-ctrl-vldn', component: CrossCtrlVldnComponent }, 
            { path: 'sticky-demo', component: StickyDemoComponent }, 
            { path: '', redirectTo: '/home', pathMatch: 'full'}
        ]
    },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

// anchor scrolling is disabled by default, we have to configure the router to make it work
// see: https://www.geekstrick.com/fragment-url-in-angular-8/
const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled', // scrolls to the anchor element when the URL has a fragment
    scrollOffset: [0, 48] // scroll offset the router will use when scrolling to the element
};

@NgModule({
    imports: [ RouterModule.forRoot(routes, routerOptions) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
