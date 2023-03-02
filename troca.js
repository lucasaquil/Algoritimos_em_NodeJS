function troca(lista, analise){
    let itemAtual = lista[analise];
    let anterior = lista[analise - 1];

    lista[analise] = anterior;
    lista[analise - 1] = itemAtual;
}

module.exports = troca;