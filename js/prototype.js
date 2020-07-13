'use strict'
/** Utilzando prototype */
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
    let nome = function () {
        this.nome = "Lucas";

    }

    let sobrenome = new nome();
    nome.prototype.sobre = "Gontijo";

    let nomeCompleto = sobrenome;
    console.log(nomeCompleto);


}

/** Herança */

{
    var f = {
        a : 5,
        soma : function (b) {
            return this.a + 1;
        }
    }

    console.log(f.soma());

    var p = Object.create(f); /** Aqui estamos criando um novo objeto */
    p.a = 77; /** Aqui o P herda oq foi declarado no objeto F */
    console.log(p.soma());
}