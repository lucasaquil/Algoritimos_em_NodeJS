const livros = require("./listaLivros");
const valor = require("./ordenar");

livros.forEach( (_, i) =>{
    menor = valor(livros, i);

    let livroAtual = livros[i];
    let maisBarato = livros[menor];

    livros[i] = maisBarato;
    livros[menor] = livroAtual;
})

console.log(livros)
