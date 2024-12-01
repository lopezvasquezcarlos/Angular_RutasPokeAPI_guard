import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  private urlApi = 'https://pokeapi.co/api/v2/pokemon/'; 
  constructor(private http:HttpClient) { } 
  
  public consultapokemon(pokemon: string):Observable<any>{ 
    return this.http.get<any>(this.urlApi+pokemon); 
}

public consultapokemon2(pokemon: string):Observable<any>{ 
  return this.http.get<any>(this.urlApi+pokemon); 
}
}
