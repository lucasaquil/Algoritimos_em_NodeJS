const livros = require('./listaLivros.js');
const troca = require('./troca.js')

function insertion(lista){
    for(i = 0; i < livros.length; i++){
        let analise = i;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            troca(lista, analise)
            analise--;
        }
    }

    console.log(lista)
}

insertion(livros)