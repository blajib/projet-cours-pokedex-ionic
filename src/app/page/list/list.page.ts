import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/class/pokemon';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  pokemons: any = [];
  types;
  typeChoiced;

  constructor(private pokemonService: PokemonApiService) {}

  async ngOnInit() {
    //this.getPokemons();
    this.getTypes();
  }

  async getPokemons(type = '', nature = '') {
    await this.pokemonService
      .getPokemons(type, nature)
      .subscribe((result: any) => {
        result.results.forEach((element) => {
          this.pokemonService
            .getPokemon(element.name)
            .subscribe((result: any) => {
              this.pokemons.push(result);
            });
        });
      });
  }

  async getPokemon(name) {
    await this.pokemonService.getPokemon(name).subscribe((result: any) => {});
  }

  async getTypes() {
    await this.pokemonService.getType().subscribe((result: any) => {
      this.types = result.results;
    });
  }
}
