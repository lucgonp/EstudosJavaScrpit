/** Declarando uma função */

let a = 2, b = 5

function math(x, y) {
    x = a;
    y = b;
    return x * b;

}

console.log(math());

/** Declarando uma função Anonima */

const f = function () {
    return "Essa é uma função anonima!";
}

console.log(f());

/** Utilizando a opção Arrow para declarar Funções */

const a1 = () => { return "Não especificou nenhum argumento" }
console.log(a1())

const a2 = arg1 => { arg1 = a; return arg1; }
console.log("Nessa opção passamos um argumento, onde o valor é: " + a2());

//Para passar mais de um argumento é necessário utilizar ()
const a3 = (arg1, arg2) => { arg1 = a; arg2 = b; return a * b; } 
console.log("Nessa opção passamos dois argumentos, onde a multiplicação dos dois valores é igual a: " + a3());

