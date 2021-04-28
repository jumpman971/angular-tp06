import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private _fireStore: AngularFirestore) { }

  public addPanierToFirebase(datas: any) {
    return new Promise(
      (resolve, reject) => {
        this._fireStore
          .collection('paniers')
          .add(datas)
          .then(
            resolve => {

            },
            err => {
              reject(err)
            }
          )
      }
    )
  }

  public getCommandesFilms() {
    return this._fireStore
      .collection('paniers')
      .snapshotChanges() //temps réel
  }

  public supprCommandeFilm(data: any) {
    return this._fireStore
      .collection('paniers')
      .doc(data)
      .delete()
  }
}
