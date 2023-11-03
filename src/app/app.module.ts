import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CouterModule } from './counter/couter.module';
import { HeroesModule } from './heroes/heroes.module';
import {DbzModule} from './dbz/dbz.module';



import { AppComponent } from './app.component';

//import { CounterComponent } from './counter/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    //CounterComponent,
    //HeroComponent,
    //ListComponent,
  ],
  imports: [
    BrowserModule,
    CouterModule,
    HeroesModule,
    DbzModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
