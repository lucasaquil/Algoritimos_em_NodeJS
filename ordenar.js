const livros = require("./listaLivros");

function valor(lista, posicaoInicial){

    let maisBarato = posicaoInicial;

    for(i = posicaoInicial; i < lista.length; i++){
        if(lista[i].preco < lista[maisBarato].preco) {
        maisBarato = i;
        }
    }

    return maisBarato;
}
module.exports = valor;