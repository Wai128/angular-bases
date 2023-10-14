import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "iroman";
  public age: number = 45;

  get capitalizedName():string{

    return this.name.toUpperCase(); }

  get HeroDescription():string{
    return `${this.name} tienen la edad de ${this.age}`;
  }

  chagenHero():void{
    this.name= 'Spiderman';
  }

  chagenAge():void{
    this.age= 25;
  }

  resetForm():void{
    this.name = 'Iroman';
    this.age = 45;
  }



}
