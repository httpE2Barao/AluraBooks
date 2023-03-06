const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' 
    ? filtrarPorDisponibilidade() 
    : filtrarPorCategoria(categoria)    

    exibirOsLivrosNaTela(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotal(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotal(valorTotal) {
    elementoValorTotal.innerHTML = 
    `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
    </div>`
}