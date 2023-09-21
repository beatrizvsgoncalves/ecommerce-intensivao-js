export const catalogo = [
	{
		id: "1",
		marca: "Zara",
		nome: "Camisa Larga com Bolsos",
		preco: 70,
		imagem: "product-1.jpg",
		alt: "Produto 1",
		feminino: false,
	},
	{
		id: "2",
		marca: "Zara",
		nome: "Casaco Reto com Lã",
		preco: 85,
		imagem: "product-2.jpg",
		alt: "Produto 2",
		feminino: true,
	},
	{
		id: "3",
		marca: "Zara",
		nome: "Jaqueta com Efeito Camurça",
		preco: 60,
		imagem: "product-3.jpg",
		alt: "Produto 3",
		feminino: false,
	},
	{
		id: "4",
		marca: "Zara",
		nome: "Sobretudo em Mescla de Lã",
		preco: 160,
		imagem: "product-4.jpg",
		alt: "Produto 4",
		feminino: false,
	},
	{
		id: "5",
		marca: "Zara",
		nome: "Camisa Larga Acolchoada de Veludo Cotelê",
		preco: 110,
		imagem: "product-5.jpg",
		alt: "Produto 5",
		feminino: false,
	},
	{
		id: "6",
		marca: "Zara",
		nome: "Casaco de Lã com Botões",
		preco: 170,
		imagem: "product-6.jpg",
		alt: "Produto 6",
		feminino: true,
	},
	{
		id: "7",
		marca: "Zara",
		nome: "Casaco com Botões",
		preco: 75,
		imagem: "product-7.jpg",
		alt: "Produto 7",
		feminino: true,
	},
	{
		id: "8",
		marca: "Zara",
		nome: "Colete Comprido com Cinto",
		preco: 88,
		imagem: "product-8.jpg",
		alt: "Produto 8",
		feminino: true,
	},
];

export function salvarLocalStorage(chave, informacao) {
	localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
	return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
	localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
	idProduto,
	idContainerHtml,
	quantidadeProduto
) {
	const produto = catalogo.find((p) => p.id === idProduto);
	const containerProdutosCarrinho = document.getElementById(idContainerHtml);

	const elementoArticle = document.createElement("article");
	const articleClasses = [
		"flex",
		"bg-slate-200",
		"rounded-lg",
		"p-1",
		"relative",
		"mb-1",
	];

	for (const articleClass of articleClasses) {
		elementoArticle.classList.add(articleClass);
	}

	const cartaoProdutoCarrinho = `
    <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg">
    <div class="flex flex-col justify-between p-2">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-500 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg font-semibold">R$${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 text-md items-center absolute top-2 right-3">
      <p id="quantidade-${produto.id}" class="font-semibold">${quantidadeProduto}</p>
    </div>`;

	elementoArticle.innerHTML = cartaoProdutoCarrinho;
	containerProdutosCarrinho.appendChild(elementoArticle);
}
