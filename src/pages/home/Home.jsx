import { useState } from "react";
import "./Home.css";
import { Container } from "./componentes/container/container";
import { Introducao } from "./componentes/introducao/introducao";

export function Home() {
  const [filtro, setFiltro] = useState("todos");
  let tituloAtual = "";
  let bancoDeDadosAtual = "";

  if (filtro === "todos") {
    tituloAtual = "Todos os Pacotes";
    bancoDeDadosAtual = "todos";
    
  } else if (filtro === "expansoes") {
    tituloAtual = "Todos os Pacotes de Expansão";
    bancoDeDadosAtual = "expansion-pack";
  } else if (filtro === "pacotes") {
    tituloAtual = "Todos os Pacotes de Jogo";
    bancoDeDadosAtual = "game-pack";
  }
  return (
    <>
      <Introducao />

      <hr className="divisor" />

      <section className="filtros-container">
        <button 
          className={filtro === "todos" ? "btn-filtro ativo" : "btn-filtro"}
          onClick={() => setFiltro("todos")}
        >
          Todos
        </button>

        <button 
          className={filtro === "expansoes" ? "btn-filtro ativo" : "btn-filtro"}
          onClick={() => setFiltro("expansoes")}
        >
          Expansões
        </button>

        <button 
          className={filtro === "pacotes" ? "btn-filtro ativo" : "btn-filtro"}
          onClick={() => setFiltro("pacotes")}
        >
          Pacotes de Jogo
        </button>
      </section>

     <Container
        idSection="vitrine-principal"
        titleContainer={tituloAtual}
        bdItem={bancoDeDadosAtual}
      />
    </>
  );
}
