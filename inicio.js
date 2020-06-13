/* // Criando o objeto que recebe nome e idade
let obj = {
    nome : "Lucas",
    idade: 29
}

console.log(obj.nome); //Printando o nome
console.log(obj.idade); //Printando a idade

//Criando o primeiro Array
const a1 = [1,2,3,4,5];

console.log(a1[4]); //Printando o array pegando o item presente na quarta posição

//Alterando o valor da posição 0 para "Alterado"
a1[0] = "Alterado";

console.log(a1[0]); //Printando o array pegando o item presente na primeira posição

//Criando um array que cria arrys em suas posições
const a2 = [
    [1,2,3,4], //Posição 0
    [5,6,7,8]  //Posição 1
]

console.log(a2[1]); //Printando o array pegando o item presente na segunda posição

//Criando a constante de tempo
const hoje = new Date;
//Criando a constatnte de tempo com campos especificos
const dt = new Date(2020,5);

console.log(hoje); //Print da constante tempo
console.log(dt); //Print da constante tempo

let temp = 23; //Criando a variavel tempo
let str = `Tempo em Goiania é de ${temp}`; //Criando a string 

console.log(str);//Printando a variavel tempo junto com a mensagem usando ``

let horario = 10; //Criando a variavel horário

if(horario < 12){ //Validação se TRUE
let teste;
teste = obj;
console.log(teste);
console.log("Bom dia");
console.log("Bem vindo ao trabalho");
}
else if(horario == 13){ //Validação se é exato
console.log("Horario do cafe");
}else{ //Validação se FALSE
    console.log("Boa tarde");
}
*/

const obj = { //Criando o objeto
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

for(let o in obj){ //For que percorre todo o objeto criado
    console.log(obj[o]); //No console será apresentado todas as caracteristicas criadas no objeto
}

const obj1 = {
    nome: "Lucas", //Para declarar uma String é necessário utilizar aspas ""
    sobrenome: "Gontijo",
    idade: 29
}

for(let i in obj1){
    //console.log(i + ": " + obj1[i]);
    console.log(obj1.nome);
}

let ary = [1,2,3,4,5,6]; //Criando o array
         //0,1,2,3,4,5 
for(let value of ary){ //No For of Loop conseguimos os valores declardos dentro do Array
    value-=2; //Pega os valores declarados e subtria por -2
    console.log(value); //mostra os valores do resultado acima -1,0,1,2,3,4
}

let str = "Lucas"  //Utilizando uma STRING
for(let nome of str){
    console.log(nome); //Será apresentado cada letra registrada L/u/c/a/s
}

