import { Component, OnInit } from '@angular/core';
import {GotService} from '../GOT.service';
@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
 availableSides =[
   {display: 'None', value:'' },
   {display:'Alive', value:'Alive'},
   {display:'Dead', value:'Dead'}
   ]
  gotService: GotService;

  constructor(gotService: GotService) {
    this.gotService = gotService;}

  ngOnInit() {
  }
onSubmit(submittedForm){
  if(submittedForm.invalid){
    return;
  }
  console.log(submittedForm);
  this.gotService.addCharacter(submittedForm.value.name, submittedForm.value.side );
}
}
