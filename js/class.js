'use strict'

class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
}

const lucas = new Pessoa("Lucas",29,"62 Kg",1.74);

console.log(lucas);