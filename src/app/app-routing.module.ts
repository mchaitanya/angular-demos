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
// setting `onSameUrlNavigation` to 'reload' retriggers the router events when you try to reload the same route
// the effect is to scroll to the anchor when you click the fragment link a second time 
//https://www.bennadel.com/blog/3545-enabling-the-second-click-of-a-routerlink-fragment-using-onsameurlnavigation-reload-in-angular-7-1-3.htm
// set `useHash` to true - GitHub Pages doesn't support the redirect to index.html
// https://dev.to/maxime1992/comment/g0i7
const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled', // scrolls to the anchor element when the URL has a fragment
    scrollOffset: [0, 56], // scroll offset the router will use when scrolling to the element
    onSameUrlNavigation: 'reload', 
    useHash: true
};

@NgModule({
    imports: [ RouterModule.forRoot(routes, routerOptions) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
