import { Component } from '@angular/core';
import { OnInit} from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'pokemon  NG';
  private pokemons:Pokemon[];
  
  ngOnInit(){
    this.pokemons = POKEMONS;
  }
  
  selectPokemon(pokemon:Pokemon){
    console.log("clique sur :"+pokemon.name);
  }
}
