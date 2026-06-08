import { useContext, useEffect, useState } from "react";
import { BsFileEarmarkMedical, BsCart } from "react-icons/bs";
import "./item-cards.css";
import { carregarDados } from "../../services/api";
import { useNavigate } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import CustomAlert from "../custom-alert/custom-alert";

export function ItemCards({ bd }) {
  const [itens, setItens] = useState([]);
  const [alerta, setAlerta] = useState("");
  const { adicionarAoCarrinhoContext } = useContext(CarrinhoContext);
  const navigate = useNavigate();

  function saibaMaisBtn(item) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    navigate(`/saiba-mais/${item?.categoria}/${item?.id}`);
  }

  function adicaoCarrinho(item) {
    adicionarAoCarrinhoContext(item);
    setAlerta(`The Sims™ 4 ${item.title} adicionado ao carrinho!`);
  }

  useEffect(() => {
    carregarDados(bd)
      .then((dados) => setItens(dados))
      .catch((err) => console.error(err));
  }, [bd]);

  return (
    <>
      {alerta && (
        <CustomAlert
          message={alerta}
          onClose={() => setAlerta("")}
          type="sucesso"
        />
      )}
      <div className="cards-container">
        {itens?.map((item, index) => (
          <div className="item-cards" key={index}>
            <img src={item?.poster_url} alt="Capa" />
            <p className="titulo-item">{`The Sims™ 4 ${item?.title}`}</p>
            <p className="preco-item">{formatPrice(item?.preco)}</p>
            <button
              onClick={() => {
                saibaMaisBtn(item);
              }}
              className="saibamais-item"
            >
              <BsFileEarmarkMedical />
              Saiba Mais
            </button>
            <button
              className="carrinho-item"
              onClick={() => {
                adicaoCarrinho(item);
              }}
            >
              <BsCart />
              Carrinho
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
