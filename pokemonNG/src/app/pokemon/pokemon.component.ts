import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

   private pokemons:Pokemon[];
  constructor() { }

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

}
