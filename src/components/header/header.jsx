import "./header.css";
import theSims4logo from "../../assets/the-sims4-logo.svg";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";

export function Header() {
  const navigate = useNavigate();

  const { itensCarrinho } =
    useContext(CarrinhoContext);

  return (
    <header className="header">
      <Link to={`/`}>
        <img src={theSims4logo} alt="Logo do The Sims 4" />
      </Link>
      <nav className="header-menu">
        <ul>
          <li className="carrinho-button">
            <button
              onClick={() => {
                navigate("/carrinho");
              }}
            >
              <BsCart />
              Carrinho
            </button>
            {itensCarrinho.length > 0 && (
              <p className="carrinho-qtd">{itensCarrinho.length}</p>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
