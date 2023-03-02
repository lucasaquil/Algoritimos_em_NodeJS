const livros = require("./listaLivros");
const valor = require("./ordenar");

for(i = 0; i < livros.length; i++){
    let menor = valor(livros, i);
    
    let livroAtual = livros[i];
    console.log(livros[i]);

    let livroMenorPreco = livros[menor];
    console.log(livros[menor]);

    livros[i] = livroMenorPreco;
    livros[menor] = livroAtual;
}

