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
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir esse item?",
    );

    if (confirmacao) {
      const novaLista = itensCarrinho.filter(
        (item, index) => index !== indexParaRemover,
      );
      setitensCarrinho(novaLista);
      localStorage.setItem("meuCarrinho", JSON.stringify(novaLista));
      return true;
    } else {
      return false;
    }
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
