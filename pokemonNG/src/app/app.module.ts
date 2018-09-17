import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { TutoComponent } from './tuto/tuto.component';
import { Routes, RouterModule } from "@angular/router";

const appRoute:Routes=[
  {path:'tuto',component:TutoComponent},
  {path:'pokemons',component:PokemonComponent},
  {path:'',redirectTo:'/tuto', pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    TutoComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
