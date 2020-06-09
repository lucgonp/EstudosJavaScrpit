let opcao = 8;
let cont = 9;

switch (opcao) {
    case 1:
        if (cont < 10) {
            do {
                cont++;
                console.log("valor apresentado é: " + cont);
            } while (cont < 10) {
                console.log(cont);
            }
        } else {
            console.log("valor invalido.");
        };
        break;

    case 2:
        if (cont < 10) {
            console.log("valor é: " + cont);
            if (cont == 5) {
                console.log("valor estático");
            }
        } else {
            console.log("valor muito alto");
        };
        break;

    case 3:
        let obj = {
            nome: "Lucas",
            idade: 29
        }

        console.log(obj.nome);
        console.log(obj.idade);
        break;

    case 4:
        let ar = [1, 2, 3, 4, 5];
        console.log(ar[1]);
        break;

    case 5:
        if (cont < 10) {
            while (cont < 10) {
                console.log("o valor é: " + cont);
                cont++;
            }
        } else {
            console.log("Passou ou é igual a 10")
        }
        break;

    case 6:
        let valorFor = 0;
        for (valorFor; valorFor < 7; valorFor++)
            console.log("Valor da variavel é: " + valorFor)
        break;

    case 7:
        let valorIncial = 0;
        let valorMenor = 7;
        for (valorIncial, valorMenor; valorIncial <= 7; valorIncial++, valorMenor--)
            console.log(valorIncial + " e " + valorMenor)
        break;

    case 8:
        let ar1 = [1];
        for (ar1; ar1 <= 10; ar1++)
            console.log(ar1);
        break;

    case 9:
        let obj1 = {
            idade = 15
        }
        console.log(obj.idade);
/*
        for (obj1.idade; obj1.idade < 20; obj1.idade++)
            console.log(obj.idade)
            */
        break;

    default:
        console.log("errado");
}