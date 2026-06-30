function obterCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id) {
    const produto = listaProdutos.find(p => p.id === id);
    if (!produto) return;

    const carrinho = obterCarrinho();
    const itemExistente = carrinho.find(i => i.id === id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }

    salvarCarrinho(carrinho);
    alert(`${produto.nome} adicionado ao carrinho!`);
}