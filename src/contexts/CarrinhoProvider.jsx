import { useState } from "react";
import { CarrinhoContext } from "./CarrinhoContext";

export function CarrinhoProvider({ children }) {
  const [itensCarrinho, setitensCarrinho] = useState(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("meuCarrinho")) || [];
    return carrinhoSalvo;
  });

  function adicionarAoCarrinhoContext(item) {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("meuCarrinho")) || [];
    carrinhoSalvo.push(item);
    localStorage.setItem("meuCarrinho", JSON.stringify(carrinhoSalvo));
    setitensCarrinho(carrinhoSalvo);
  }

  function carrinhoQuantidadeContext() {
    if (itensCarrinho.length == 0) {
      let carrinhoQtd = document.querySelector(".carrinho-qtd");
      carrinhoQtd.classList.toggle("carrinho-qtd-none");
    } else {
      return itensCarrinho.length;
    }
  }

  function removerItemContext(indexParaRemover) {
    // 1. Cria uma lista nova tirando o item que o usuário clicou
    const novaLista = itensCarrinho.filter(
      (item, index) => index !== indexParaRemover,
    );

    // 2. Atualiza a tela usando a função do state
    setitensCarrinho(novaLista);

    // 3. Salva a nova lista no Local Storage
    localStorage.setItem("meuCarrinho", JSON.stringify(novaLista));
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itensCarrinho,
        adicionarAoCarrinhoContext,
        removerItemContext,
        carrinhoQuantidadeContext,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
