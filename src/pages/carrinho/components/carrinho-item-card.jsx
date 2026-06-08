  import { useContext } from "react";
  import { CarrinhoContext } from "../../../contexts/CarrinhoContext";
  import formatPrice from "../../../utils/formatPrice";
  import "./carrinho-item-card.css";

  export function CarrinhoItemCard({ item, index, setAlerta }) {
    const { removerItemContext } = useContext(CarrinhoContext);

    function itemDelete() {
      const removidoComSucesso = removerItemContext(index);

      if (removidoComSucesso) {
        setAlerta(`The Sims™ 4 ${item.title} foi removido!`);
      }
    }

    return (
      <div className="carrinho-item-container">
        <img src={item?.poster_url} alt={item.title} />
        <p>{`The Sims™ 4 ${item?.title}`}</p>
        <p>{`${formatPrice(item?.preco)}`}</p>
        <button
          onClick={itemDelete}
        >
          Remover
        </button>
      </div>
    );
  }
