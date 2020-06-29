/** Utilizando uma keyword para printar a mensagem */
const obj = {
    frase: "Eu sou o mago",
    mago() {
        return `${this.frase} Gandalf!`;
    }
}

console.log(obj.mago())

/** Quando não utilizamos uma Keyword para relaizar o print da mensagem. */
const obj2 = {
    aqui: "Teste",
    tester(a1) {
        a1 = 1;
        return a1;
    }
}

console.log(obj2.aqui + " " + obj2.tester())