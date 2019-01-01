export class PokemonView {
    constructor(cback){
        this.input = document.querySelector('.info-poke');
        this.listPoke = document.querySelector('.listPoke');
        this.listAnother = document.querySelector('.listAnother');
        this.btn = document.querySelector('.btn-poke');
        this.btn.addEventListener('click', cback);
    }

    getValue() {
      return this.input.value;
    }

    clearValue() {
      this.input.value = '';
    }

    renderValue(list, name) {
      let item = document.createElement('li');
      item.innerHTML = name;
      list.append(item);
    }

}