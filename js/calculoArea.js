class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(){
        return this.altura * this.largura;
    }

    get area(){
        return this.calcularArea();
    }

}

const a = new Retangulo(5,5);

console.log(a.area);
