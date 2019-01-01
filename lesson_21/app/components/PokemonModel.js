export class PokemonMolel {
    pokemonMax = 807;
    constructor() {
        this.link = 'https://pokeapi.co/api/v2/pokemon/';
        this.base = [];
    }
    
    getRandomPokemon() {
        const id = Math.floor(Math.random()*this.pokemonMax + 1);
        return fetch(`${this.link}${id}`).then(r => r.json()).then(data => {
            this.base.unshift({
                id,
                name : data.name,
                photo : data.sprites.front_default
            });
            return this.base;
        })
    }
}