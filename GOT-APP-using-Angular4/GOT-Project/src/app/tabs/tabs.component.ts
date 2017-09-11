import { Component, OnInit } from '@angular/core';
import {GotService} from '../GOT.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],

})
export class TabsComponent implements OnInit {
characters=[];
  chosenList='all';
  gotService: GotService;

  constructor(gotService: GotService) {
    this.gotService = gotService;}

  ngOnInit() {
  }
  onChoose(side){
    this.chosenList = side;
  }

  getCharacters(){
     this.characters = this.gotService.getCharacters(this.chosenList);
    return this.characters;
  }

}
