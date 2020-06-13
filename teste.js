/*
let count = 0;

for (count; count <= 5; count++) {
    if (count == 4) {
        console.log("Chegou no numero exato: " + count);
    } else {
        console.log(count);
    }

}
*/

let ar = [0,1,2];

//for(ar; ar < 10; ar++){
//}

for(let valor of ar){
    console.log(valor);
    if(valor >= 2){
        valor = "Valor localizado.";
        console.log(valor);
    }else{
        valor+=3;
        console.log(valor);
    }
}

//0 >=2 falso 0+3 = 3
//1 >=2 falso 1+3 = 4
//2 >=2 true 2 printa "Valor localizado."