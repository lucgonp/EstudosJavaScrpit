/** Aprendendo a usar o Break */

let numero = 8;

for (numero; numero < 10; numero++) {
    if (numero === 9) break;
    console.log(numero)
}

for (numero; numero < 5; numero++) {
    if (numero === 2) {
        console.log("Finalizou a contagem");
        break
    }
    console.log(numero);
}



/** Trabalhando com a break label */

let x = 0;

s: {
    teste = "Lucas";
    console.log(teste);
    break s;
}

/** Trabalhando com Continue */

while (x < 10) {
    x++;
    if (x == 5) {
        y = multiplicar(); /** chamando a função Multiplicar */
        console.log(y);
        console.log("Aplicou a Função criada para Y");
        continue;
    }if (x == 7){
        z = sorte(); /** chamando a função sorte */
        continue;
    }
    console.log(x);
}

/** Declarando a função que vai realizar a multiplicação do valor de X por 2. */

function multiplicar(y) {
    y = x;
    y *= 2;
    return y;
}

/** Criando a função que apresentará a mensagem "Numero da Sorte" quando for chamada. */

function sorte(z){
    console.log("Numero da sorte")
}