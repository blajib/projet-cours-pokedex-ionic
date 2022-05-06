import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private httpClient: HttpClient) {}
  // eslint-disable-next-line @typescript-eslint/member-ordering
  private urlAllPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=50';
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
  private urlTypes = 'https://pokeapi.co/api/v2/type/';

  getPokemons(type, nature) {
    return this.httpClient.get(this.urlAllPokemons);
  }

  getPokemon(name) {
    return this.httpClient.get(this.urlPokemon + name);
  }

  getType() {
    return this.httpClient.get(this.urlTypes);
  }
}
