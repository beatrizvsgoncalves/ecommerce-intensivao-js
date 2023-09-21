import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
	for (const produtoCatalogo of catalogo) {
		const cartaoProduto = `<div class="w-56 shadow-xl shadow-slate-400 rounded-lg hover:scale-[1.04] duration-[350ms] flex flex-col justify-between gap-1 ${
			produtoCatalogo.feminino ? "feminino" : "masculino"
		}" id="card-produto-${produtoCatalogo.id}">
      <img src="./assets/img/${produtoCatalogo.imagem}" alt="${
			produtoCatalogo.alt
		}do Magazine Hashtag." class="rounded-t-lg">
        <p class="text-xs px-2">${produtoCatalogo.marca}</p>
        <p class="text-sm px-2">${produtoCatalogo.nome}</p>
        <p class="text-sm px-2">R$${produtoCatalogo.preco}</p>
        <button id="adicionar-${
					produtoCatalogo.id
				}" class="bg-slate-950 text-slate-200 p-1 hover:bg-slate-900 active:scale-75 duration-[40ms] m-2 active:bg-slate-950">
        <i class="fa-solid fa-cart-plus"></i>
        </button>
    </div>`;

		document.getElementById("container-produto").innerHTML += cartaoProduto;
	}

	for (const produtoCatalogo of catalogo) {
		document
			.getElementById(`adicionar-${produtoCatalogo.id}`)
			.addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
	}
}
