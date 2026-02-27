// Abstração
class Personagens {

    //Atributos
    nome;
    poderDeAtaque;
    #hp
    
    //Métodos
    constructor(nome, poderDeAtaque) {
        this.nome = nome;
        this.poderDeAtaque = Number(poderDeAtaque);
        this.#hp = 200;
    }

    receberDano(valor) {
        this.#hp -= valor;
        if (this.#hp <= 0) {
            this.#hp = 0;
            return `${ this.nome } tomou ${ valor } de dano e morreu.HP: ${ this.#hp }`;
        }
    } 

// Encapsulamento

exibirStatus() {
    if (this.#hp <= 0) {
        return `${this.nome} está morto. HP do personagem: ${this.#hp}`;
    } else {
        return `${this.nome} está vivo. HP do personagem: ${this.#hp}`;
    }
}
} 


// Exemplo 
const personagem = new Personagens('Mario Bross', 100);
console.log(personagem.receberDano(30));
console.log(personagem.exibirStatus());
console.log('');

// Herança  
class Guerreiros extends Personagens {
    constructor(nome, poderDeAtaque, forcaFisica) {
        super(nome, poderDeAtaque);
        this.forcaFisica = forcaFisica
    }
    atacar(alvo) {
        const dano = this.poderDeAtaque + this.forcaFisica;
        return `${this.nome} atacou ${alvo} causando ${dano} de dano com chute supremo!`;
    }
}


const guerreiro = new Guerreiros('Luigi', 80, 20);
console.log(guerreiro.atacar('Browser'));

//Mago 
class Magos extends Personagens {
    constructor(nome,poderDeAtaque,poderMagico) {
        super(nome,poderDeAtaque);
        this.poderMagico = poderMagico;
        }

        atacar(alvo) {
            const dano = this.poderDeAtaque + (this.poderMagico * 2);
            return `${this.nome} atacou ${alvo} causando ${dano} de dano com magia suprema!`;
        }
    }

    const mago = new Magos('Peach', 70, 30);
    console.log(mago.atacar('Nabbit'));
    console.log('');

    // Polimorfismo
    console.log(`--------- Início - Batalha ---------`);
    console.log('');
    
    console.log(mago.exibirStatus());
    console.log(guerreiro.exibirStatus());
    console.log('');    

    console.log('--------- Durante a Batalha --------');
    console.log('');

    console.log(mago.atacar(guerreiro.nome));
    const danoMago = mago.poderDeAtaque + (mago.poderMagico * 2);
    console.log(guerreiro.receberDano(danoMago));
    console.log(guerreiro.exibirStatus());
    console.log('');

    if (guerreiro.exibirStatus().includes('vivo')) { 
        console.log(guerreiro.atacar(mago.nome));
        const danoGuerreiro = guerreiro.poderDeAtaque + guerreiro.forcaFisica;
        console.log(mago.receberDano(danoGuerreiro));
        console.log(mago.exibirStatus());
    } 
    console.log('');

    console.log('--------- Fim - Batalha ---------');
    console.log('');

    console.log(mago.exibirStatus());
    console.log(guerreiro.exibirStatus());
    if (mago.exibirStatus().includes('morto')) {
        console.log(`🥇${guerreiro.nome} venceu a batalha!!`);
    } else if (guerreiro.exibirStatus().includes('morto')) {
        console.log(`🥇${mago.nome} venceu a batalha!!`);
    } else {
        console.log('A batalha terminou empatada!!');
    }; 
    
    
    
    
        
        
    
    
    
    
    
    
    
    
    