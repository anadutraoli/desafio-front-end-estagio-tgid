import "./introducao.css";
import galeraTheSims4 from "../../../../assets/galera-the-sims4.png";

export function Introducao() {
  return (
    <main className="introducao">
      <div className="titulo-introducao">
        <h1>
          Saiba tudo sobre <br />{" "}
          <span className="span-introducao">The Sims 4</span> em um <br />
          só lugar.
        </h1>
        <p>expansões e pacotes.</p>
      </div>
      <img src={galeraTheSims4}   alt="Personagens de The Sims 4" />
    </main>
  );
}
