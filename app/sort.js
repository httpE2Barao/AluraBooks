let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPreco.addEventListener('click', ordenarLivrosPreco)

function ordenarLivrosPreco() {
    // Ordenar livros com método sort do menor pro maior
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}