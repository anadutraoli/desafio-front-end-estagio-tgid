import { useContext, useState } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import "./carrinho.css";
import { CarrinhoItemCard } from "./components/carrinho-item-card";
import CustomAlert from "../../components/custom-alert/custom-alert";

export function Carrinho() {
  const { itensCarrinho } = useContext(CarrinhoContext);
  const [alerta, setAlerta] = useState("");

  return (
    <main className="container-carrinho">
      {alerta && (
        <CustomAlert
          message={alerta}
          onClose={() => setAlerta("")}
          type="delete"
        />
      )}
      <h1>Seu Carrinho</h1>
      {itensCarrinho.length === 0 ? (
        <p>Seu carrinho está vazio :(</p>
      ) : (
        <div className="container-card">
          {itensCarrinho.map((item, index) => (
            <CarrinhoItemCard key={index} index={index} item={item} setAlerta={setAlerta} />
          ))}
        </div>
      )}
    </main>
  );
}
