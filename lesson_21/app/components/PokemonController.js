import { PokemonMolel } from './PokemonModel.js'
import {PokemonView} from './PokemonView.js'

export class PokemonController{
    constructor() {
        this.model = new PokemonMolel();
        //this.view = new PokemonView(this.handleClickRandomPokemon); // problem with context
        this.view = new PokemonView(this.handleClickRandomPokemon.bind(this)); // bind
        //this.view = new PokemonView(()=> this.handleClickRandomPokemon());
    }

    handleClickRandomPokemon() {
        this.model.getRandomPokemon().then(arr => this.view.renderPOkemons(arr));
    }
}