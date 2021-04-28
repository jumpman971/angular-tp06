import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Films } from '../films';
import { Subscription } from 'rxjs';
import { FilmsService } from '../films.service';
import { PanierService } from '../panier.service';



@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.scss']
})
export class ListeDesFilmsComponent implements OnInit {

  // propriétés
  public stateFilms: Films[] = [];  // strict mode NG11
  public stateSubscription = new Subscription();
  public panierFilm: Films[] = [];
  public commandesFilm: any[] = [];


  constructor(
    private _filmsService: FilmsService,
    private _panierService: PanierService,
  ) {
    this.stateFilms = []; // strict mode NG 11
  }

  ngOnInit(): void {
// -- récup de la liste des films(produits)
    this.stateSubscription = this._filmsService.getFilms().subscribe(
      (datas: Films[]) => { this.stateFilms = datas }
    );
    //récup des commandes
    this._panierService.getCommandesFilms().subscribe(
      (datas) => {
        this.commandesFilm = datas;
      }
    )
  }

  public addPanierFilm(film: Films): void {
    if (this.panierFilm.indexOf(film) > -1 === false) {
      this.panierFilm.push(film);
      console.table(this.panierFilm);
    }
  }

  // --------------------------------
  public supprPanierFilm(film: Films): void {
    let keyPanierFilm = this.panierFilm.indexOf(film);
    if (keyPanierFilm > -1) this.panierFilm.splice(keyPanierFilm, 1);
  }
  // -------------------------------

  // -------------------------------
  public afficheBtnPanier() {
    if (this.panierFilm.length === 0) {
      return 'none';
    } else {
      return 'block';
    }
  }

  public validerPanier(): void {
    console.clear();
    console.log(...this.panierFilm) //Spread operator es

    let datas = {...this.panierFilm}
    this._panierService.addPanierToFirebase(datas).then(
      res => { console.log(res)}
    )
  }

  public supprCommande(commande: any): void {
    this._panierService.supprCommandeFilm(commande.payload.doc.id)
  }
}
