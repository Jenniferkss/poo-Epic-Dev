// Abstração
class Personagens {

 #hp
    //Métodos
    constructor(nome) {
        this.nome = nome;
        this.poderDeAtaque() = Number(poderDeAtaque);
        this.#hp = 200;
    }

    receberDano(valor) {
        this.#hp -= valor;
        if (this.#hp <= 0) {
            this.#hp = 0;
            return ${ this.nome; } tomou ${ valor; } de dano e morreu.HP: ${ this.#hp; };
        }
    }
}

// Criando uma instãncia da class Personagens - Objeto
const personagem = new Personagens('Mario Bross');

console.log('-----------');
console.log(personagem.receberDano());
console.log(`Esta sendo atacado? ${personagem.receberDano ? 'sim' : 'não'}`);

// Encapsulamento

    #poderDeAtaque;

    constructor(nome) {
        this.nome = nome;
        this.#poderDeAtaque = false;

    receberInfo() {
        return this.#poderDeAtaque ? 'Sim' : 'Não';
    }

}

const minhaNave = new NaveEspacial('Millenium Vulcon');

console.log(minhaNave);
console.log(minhaNave.voar);
console.log(`Está voando? ${minhaNave.receberInfo() === 'Sim' ? 'Decolagem autorizada' : 'Em Solo'}`);
