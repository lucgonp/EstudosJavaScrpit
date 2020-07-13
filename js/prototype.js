'use strict'

{
    let f = function () {
        this.a = 1;
        this.b = 2;
        this.c = 3;
        this.d = 4;
    }
    let o = new f();
    f.prototype.e = 5;

    console.log(o)
    
    

}

{
    let nome = function(){
        this.nome = "Lucas";
        
    }

    let sobrenome = new nome();
    nome.prototype.sobre = "Gontijo";

    let nomeCompleto = sobrenome;
    console.log(nomeCompleto);

   
}