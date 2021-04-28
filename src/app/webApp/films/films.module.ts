import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeDesFilmsComponent } from './liste-des-films/liste-des-films.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../../../environments/environment';



@NgModule({
  declarations: [ListeDesFilmsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  exports: [ListeDesFilmsComponent]
})
export class FilmsModule { }
