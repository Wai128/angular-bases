import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DbzListComponent {


  @Input()
  public characterList: Character[] = [
    {
      name:'Trunk',
      power:10,
    }
  ]

  //onDelete = Index value : number
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  OnDeleteCharater(id?:string):void{
    //Todo: Emitir el ID del personaje
    /*console.log({index})*/

    if(!id) return;
  
    this.onDelete.emit(id);

  }

}
