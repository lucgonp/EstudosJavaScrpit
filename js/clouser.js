/** Aqui vou aplicar meu conhecimento em relação a escopo global e block e utilizar Clouser */
/** Global */
const obj1 = {
    vari1: "Variavel 1 - Global"
}

function show() {
    console.log(obj1.vari1);
}

const nome = "Variavel Global Teste";

show();

console.log('-----------------------------');

/** Block */
/** As variaveis iniciadas dentro do bloco n podem ser chamadas fora do mesmo */
/** As funções criadas dentro de um bloco podem ser utilizadas fora do mesmo */
console.log("Começando o bloco");
{
    console.log("Dentro do bloco");

    const x = 5;

    const objB = {
        variB: "Variavel 1 dentro do Bloco"
    }

    function showBlock() {
        console.log(objB.variB);
    }

    showBlock();
    console.log(nome);
}

console.log('-----------------------------');

/** Clouser */
/** Utilizando o Clouser para ter acesso as informações lançadas dentro de um bloco */


{
    let objP = {
        nome: "Lucas",
        idade: 29
    };

    f = () => { return objP; }
}


var nomeEIdade = f();

console.log(nomeEIdade);

{
    let x = 10;

    f1 = () => { return x; }
}

var math = f1();
math += 5;
console.log(math)


console.log('-----------------------------');

let num1 = 5;
let num2 = 15;

function soma(){
    return num1 + num2
}

var result = soma(); 
console.log(result);