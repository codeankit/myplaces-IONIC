import { Component, OnInit,Input } from '@angular/core';
import {GotService} from '../GOT.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],

})
export class ItemComponent implements OnInit {
  @Input() character;
  gotService: GotService;
  constructor(gotService: GotService) {
    this.gotService = gotService;}
  ngOnInit() {
  }
onAssign(side){
  //this.character.side = side;
  //this.sideAssigned.emit({name:this.character.name, side:side});

  this.gotService.onSideChosen({name: this.character.name, side:side});
}
}
