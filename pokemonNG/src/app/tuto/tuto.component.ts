import { POKEMONS } from "../pokemon/mock-pokemons";
import { Pokemon } from "../pokemon/pokemon";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.css']
})
export class TutoComponent implements OnInit {

  title = 'Tuto';
  private value:string='';
  private myOut:string='';
  private values:string='';
  private pokemons:Pokemon[];
  
  ngOnInit(){
    this.pokemons = POKEMONS;
  }
  
  onClick(){
    console.log("button clicked !");
  }
  
  onTest(event:KeyboardEvent){
     this.value = "Bonjour : "+(<HTMLInputElement>event.target).value;
  }
  
  onKey(value:string){
    this.myOut = "Hello : "+value;
  }

}
