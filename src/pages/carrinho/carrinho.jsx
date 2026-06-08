import { useContext } from "react";
import formatPrice from "../../utils/formatPrice";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";

export function Carrinho() {
      const { itensCarrinho, removerItemContext } = useContext(CarrinhoContext);

  return (
    <main>
      <h1>Seu Carrinho</h1>

      {itensCarrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {itensCarrinho.map((item, index) => (
            <li key={index}>
              {item.title} - {formatPrice(item?.preco)}
              <button onClick={() => {removerItemContext(index)}}>Remover</button>
            </li>
          ))}
        </ul>
        
      )}
    </main>
  );
}
