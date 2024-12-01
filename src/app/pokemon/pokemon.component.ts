import { Component } from '@angular/core';
import { TestApiService } from '../service/test-api.service'; 

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemone: any={};

  constructor(private api:TestApiService) {}

  ngOnInit(): void { 
    this.searchPokemon(); 
    }
    
    searchPokemon():void{ 
    this.api.consultapokemon('charmander').subscribe({ 
    next:(infoPoke)=>{ 
    this.pokemone = infoPoke; 
    console.log(this.pokemone); 
    } 
    }) 
    } 
}
