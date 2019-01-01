export class PokemonModel {
    

    constructor() {
        this.link = 'https://pokeapi.co/api/v2/pokemon/';
    }

    async findPoke(name) {
        let response = await fetch(`${this.link}${name}`);
        if (response.ok) { 
            return name;
        } 
    }
}

