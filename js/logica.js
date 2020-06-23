let x = 2, y = 5;
 

/* Quando utilizamos o && os dois argumentos precisam ser verdadeiros para entrar dentro do IF */

if(x == 10 && y == 5){
    console.log(true);
}else{
    console.log(false);
}

/* Quando utilizamos o || pelo menos um dos argumentos precisa ser verdadeiro para entrar dentro do IF */ 

if(x == 10 || y == 5){
    console.log(true);
}else{
    console.log(false);
}

/* Aprendendo a utilizar a opção Destructing Assignment Operator */

/* Utilizando a opção com um objeto. */
const obj = {
    a:1,b:2,c:3,d:4,e:5,f:6
};

({a,b,c,...rest} = obj);

console.log(a);
console.log(rest);

/* Utilizando a opção com um array. */

let arry = [10,20,30,40,50,60];

([a,b,c,...rest] = arry);

console.log(a);
console.log(rest);