import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './composants-enfants-nav-body/angular/angular.component';
import { ReactComponent } from './composants-enfants-nav-body/react/react.component';
import { VueComponent } from './composants-enfants-nav-body/vue/vue.component';

export const routesFW: Routes = [
  {path: 'angular-11', component: AngularComponent, outlet: 'outletFW'},
  {path: 'react-16', component: ReactComponent, outlet: 'outletFW'},
  {path: 'vue', component: VueComponent, outlet: 'outletFW'},
];

@NgModule({
  imports: [RouterModule.forChild(routesFW)],
  exports: [RouterModule]
})
export class FrameworksRoutingModule { }
