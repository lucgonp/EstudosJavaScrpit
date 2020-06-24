/** Aprendendo a usar o Break */

let numero = 8;

for (numero; numero < 10; numero++) {
    if (numero === 9) break;
    console.log(numero)
}

for (numero; numero < 100; numero++) {
    if (numero === 55) {
        console.log("Finalizou a contagem");
        break
    }
    console.log(numero);
}

let x = 1;

/** Trabalhando com a break label */

label: while (x == 1) {
    console.log(x);
    break label;
}