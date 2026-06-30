let listaProdutos = [];

async function carregarProdutos() {
    try {
        const resposta = await fetch("dados/produtos.json");
        if (!resposta.ok) throw new Error("Erro ao carregar");
        listaProdutos = await resposta.json();
    } catch (erro) {
        console.log("Usando lista padrão:", erro);
        listaProdutos = [
            {
                id: 1,
                nome: "Monster Energy",
                preco: 8.90,
                descricao: "Bebida energética 473ml",
                categoria: "Bebidas"
            },
            {
                id: 2,
                nome: "Máscara Kitsune",
                preco: 79.90,
                descricao: "Artesanal em resina",
                categoria: "Artesanato"
            },
            {
                id: 3,
                nome: "Xis Salada",
                preco: 15.90,
                descricao: "Lanche tradicional gaúcho",
                categoria: "Alimentação"
            }
        ];
    }
    renderizarProdutos();
}

function renderizarProdutos() {
    const container = document.querySelector(".grade-produtos");
    if (!container) return;

    container.innerHTML = "";
    listaProdutos.forEach(produto => {
        container.innerHTML += `
            <div class="cartao-produto">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p class="preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
                <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", carregarProdutos);