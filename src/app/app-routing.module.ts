import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './webApp/accueil/home/home.component';
import { ListeDesFilmsComponent } from './webApp/films/liste-des-films/liste-des-films.component';
import { OperatorsComponent } from './webApp/rxjs/operators/operators.component';
import { routesFW } from './webApp/frameworks/frameworks-routing.module';
import { LandingFwComponent } from './webApp/frameworks/composants/landing-fw/landing-fw.component';

const routes: Routes = [
  { path:'accueil', component: HomeComponent },
  { path:'', component: HomeComponent },
  { path:'les-films', component: ListeDesFilmsComponent },
  { path:'programmation-rxjs', component: OperatorsComponent },
  //{ path:'listes-des-frameworks', component: LandingFwComponent, children: routesFW},
  /*{ 
    path:'listes-des-frameworks', 
    component: LandingFwComponent, 
    loadChildren: () => import('./webApp/frameworks/frameworks.module').then(
      m => m.FrameworksModule
    )
  },*/
  // en mode asynchrone ASYNC AWAIT
  // Non bloquant
  { 
    path:'listes-des-frameworks', 
    component: LandingFwComponent, 
    loadChildren: async () => (
      await(
        import('./webApp/frameworks/frameworks.module')
      )
    ).FrameworksModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
