import { useEffect, useState } from "react";
import { carregarItemPorId } from "../../../../services/api";
import { useParams } from "react-router-dom";
import "./product-detail.css";
import formatPrice from "../../../../utils/formatPrice";


export function ProductDetail() {
  const { categoria, id } = useParams();
  const [item, setItens] = useState(null);

  useEffect(() => {
    async function detalhesDoItemPreview() {
      try {
        const dados = await carregarItemPorId(categoria, id);
        setItens(dados);
      } catch (err) {
        console.error("Erro ao buscar ", err);
      }
    }
    detalhesDoItemPreview();
  }, [categoria, id]);

  if (!item) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Carregando detalhes...
      </p>
    );
  }

  return (
    <div className="preview-container">
      <div className="preview-img">
        <img src={item?.poster_url} alt={`Capa de ${item.title}`} />
      </div>
      <div className="preview-detalhes">
        <h1>{`The Sims™ 4 ${item?.title}`}</h1>
        <p>{item?.description}</p>
        <p>{formatPrice(item?.preco)}</p>
      </div>
    </div>
  );
}
