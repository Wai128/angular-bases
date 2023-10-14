import { Component, OnInit } from '@angular/core';

@Component({
  /*cambiamos el nombre de nuestro selector*/
  selector: 'app-counter',
  template: '<h2>{{title}}</h2> <h3>Counter: {{counter}}</h3> <button (click)="increaseby(+1)">+ 1</button>  <button (click)="increaseby(-1)">- 1</button>  <button (click)="reset()">Resetear</button>',
})

export class CounterComponent implements OnInit {
  constructor() { }

  public counter:number = 10;
  public mensaje_bienvenida:string = "Bienvenido a la pagina principal";
  public title:string="Bienvenida";


  increaseby(value:number):void{
    this.counter +=value;
  }

  reset():void{
    this.counter=0;
  }

  saludo():void{
    this.mensaje_bienvenida;
  }

  ngOnInit() { }
}

/*

import { Component } from '@angular/core';

/*2 creacion de la clase por medio de un compoenente*/
/*@Component({

  /*nombre de como identificar este counter en el html*/
 /* selector:'app-counter',

  /*creacion del template*/
  /*template: '<h1>Hola Counter</h1>',

})

/*1. Creacion de la clase*/
/*export class CounterComponent{


}
*/
