import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ModalController,LoadingController,ToastController } from "ionic-angular";
import {Geolocation} from "@ionic-native/geolocation";
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { SetLocation } from"../set-location/set-location";
import { Location } from"../../models/location";
import { PlacesService } from "../../services/places";

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlace {
  location: Location = {
    lat: 40.711565,
    lng: -74.005043
  };
  locationIsSet = false;
  imageUrl = '';
  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private placesService: PlacesService,
              private geolocation:Geolocation,
              private camera:Camera,
              private file:File
  ) {
  }

  onSubmit(form: NgForm) {
    this.placesService
      .addPlace(form.value.title, form.value.description, this.location, this.imageUrl);
    form.reset();
    this.location = {
      lat: 40.7624324,
      lng: -73.9759827
    };
    this.imageUrl = '';
    this.locationIsSet = false;
  }

  onOpenMap() {
    const modal = this.modalCtrl.create(SetLocation, {location:this.location});
    modal.present();
    modal.onDidDismiss(
      data => {
        if(data){
          this.location = data.location;
          this.locationIsSet = true;

        }
      }
    );
  }
  onLocate() {
    const loader = this.loadingCtrl.create({
      content: 'Getting your Location...'
    });
    loader.present();
    this.geolocation.getCurrentPosition()
      .then(
        location => {
          loader.dismiss();
          this.location.lat = location.coords.latitude;
          this.location.lng = location.coords.longitude;
          this.locationIsSet = true;
        }
      )
      .catch(
        error => {
          loader.dismiss();
          const toast = this.toastCtrl.create({
            message: 'Could get location, please pick it manually!',
            duration: 2500
          });
          toast.present();
        }
      );
  }

  onTakePhoto() {
    this.camera.getPicture({
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    })

      .then(
        imageData => {

          this.imageUrl = imageData;
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
  }

}
