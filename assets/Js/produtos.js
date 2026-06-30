let listaProdutos = [];

async function carregarProdutos() {
    try {
        const resposta = await fetch("./dados/produtos.json");
        if (!resposta.ok) throw new Error("JSON não encontrado");
        listaProdutos = await resposta.json();
    } catch (erro) {
        console.warn("Usando lista padrão:", erro);
        listaProdutos = [
            { id: 1, nome: "Monster Energy", preco: 8.90, descricao: "Bebida energética 473ml" },
            { id: 2, nome: "Máscara Kitsune", preco: 79.90, descricao: "Artesanal em resina" },
            { id: 3, nome: "Xis Salada", preco: 15.90, descricao: "Lanche gaúcho" }
        ];
    }
    renderizarProdutos();
}

function renderizarProdutos() {
    const container = document.querySelector(".grade-produtos");
    if (!container) return;
    container.innerHTML = "";
    listaProdutos.forEach(p => {
        container.innerHTML += `
        <div class="cartao-produto">
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <p class="preco">R$ ${p.preco.toFixed(2).replace(".", ",")}</p>
            <button onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
        </div>`;
    });
}

document.addEventListener("DOMContentLoaded", carregarProdutos);