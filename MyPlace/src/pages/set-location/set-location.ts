import { Component } from '@angular/core';

import {NavParams, ViewController} from "ionic-angular";
import { Location } from"../../models/location";
/**
 * Generated class for the SetLocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocation {
location:Location;
marker:Location;

constructor(private navParam:NavParams,
            private viewCtrl:ViewController){
this.location=this.navParam.get('location');
}
onSetMarker(event:any){
console.log(event);
this.marker= new Location(event.coords.lat, event.coords.lng);

}
onConfirm(){
  this.viewCtrl.dismiss({location: this.marker});
}
  onAbort(){
this.viewCtrl.dismiss();
}
}
