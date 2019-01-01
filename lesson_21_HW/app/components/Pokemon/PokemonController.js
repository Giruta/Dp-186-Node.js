import{PokemonModel} from './PokemonModel.js'
import{PokemonView} from './PokemonView.js'

export class PokemonController {
    constructor() {
        this.model = new PokemonModel();
        this.view = new PokemonView(this.handleClickFind.bind(this));
    }

    async handleClickFind(){
        let value = this.view.getValue();
        let result = await this.model.findPoke(value);

        if(result) {
            this.view.renderValue(this.view.listPoke, result);
        } else {
            this.view.renderValue(this.view.listAnother, value);
        }

        this.view.clearValue();
    }
}