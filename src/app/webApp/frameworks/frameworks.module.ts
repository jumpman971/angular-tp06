import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworksRoutingModule } from './frameworks-routing.module';
import { LandingFwComponent } from './composants/landing-fw/landing-fw.component';
import { HeaderFwComponent } from './composants/header-fw/header-fw.component';
import { FooterFwComponent } from './composants/footer-fw/footer-fw.component';
import { AngularComponent } from './composants-enfants-nav-body/angular/angular.component';
import { ReactComponent } from './composants-enfants-nav-body/react/react.component';
import { VueComponent } from './composants-enfants-nav-body/vue/vue.component';
import { BodyFwComponent } from './composants/body-fw/body-fw.component';


@NgModule({
  declarations: [
    LandingFwComponent, 
    HeaderFwComponent, 
    FooterFwComponent, 
    BodyFwComponent, 
    AngularComponent, 
    ReactComponent,
    VueComponent
  ],
  imports: [
    CommonModule,
    FrameworksRoutingModule
  ],
  exports: [
    LandingFwComponent, 
    HeaderFwComponent, 
    FooterFwComponent, 
    BodyFwComponent, 
    AngularComponent, 
    ReactComponent, 
    VueComponent
  ]
})
export class FrameworksModule { }
