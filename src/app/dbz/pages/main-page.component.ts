import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {

  constructor( private dbzService: DbzService) { }

  get character(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter ( id:string):void{
    this.dbzService.deleteCharacterByID(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
  }

  ngOnInit() { }
}
