import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPlace } from"../../pages/add-place/add-place";
import { Place } from "../../models/place";
import { PlacesService } from "../../services/places";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addPlace = AddPlace;
  places:Place[]=[];
  constructor(public navCtrl: NavController,
              private placesService: PlacesService) {

  }
  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }

}
