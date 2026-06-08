import { useContext, useEffect, useState } from "react";
import { carregarItemPorId } from "../../../../services/api";
import { useParams } from "react-router-dom";
import "./product-detail.css";
import formatPrice from "../../../../utils/formatPrice";
import { SkeletonProduct } from "../skeleton/skeleton-product";
import { BsCart } from "react-icons/bs";
import { CarrinhoContext } from "../../../../contexts/CarrinhoContext";
import CustomAlert from "../../../../components/custom-alert/custom-alert";

export function ProductDetail() {
  const { categoria, id } = useParams();
  const [item, setItens] = useState(null);
  const [alerta, setAlerta] = useState("");
  const [loading, setLoading] = useState(true);
  const { adicionarAoCarrinhoContext } = useContext(CarrinhoContext);

  useEffect(() => {
    async function detalhesDoItemPreview() {
      try {
        const dados = await carregarItemPorId(categoria, id);
        setItens(dados);
        setLoading(false);
      } catch (err) {
        console.error("Erro ao buscar ", err);
      }
    }
    detalhesDoItemPreview();
  }, [categoria, id]);

  function adicaoCarrinho(item) {
    adicionarAoCarrinhoContext(item);
    setAlerta(`The Sims™ 4 ${item.title} adicionado ao carrinho!`);
  }

  if (!item || loading) {
    return <SkeletonProduct />;
  }

  return (
    <>
      {alerta && (
        <CustomAlert
          message={alerta}
          onClose={() => setAlerta("")}
          type="sucesso"
        />
      )}
      <div className="preview-container">
        <div className="preview-img">
          <img src={item?.poster_url} alt={`Capa de ${item.title}`} />
        </div>
        <div className="preview-detalhes">
          <h1>{`The Sims™ 4 ${item?.title}`}</h1>
          <p className="descricao-produto">{item?.description}</p>
          <p className="preco-produto">{formatPrice(item?.preco)}</p>
          <button
            className="carrinho-product-btn"
            onClick={() => {
              adicaoCarrinho(item);
            }}
          >
            <BsCart style={{ fontSize: "20px" }} />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </>
  );
}
