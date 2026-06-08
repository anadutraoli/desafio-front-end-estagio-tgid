import "./footer.css";
import theSims4logo from "../../assets/the-sims4-logo.svg";
import { BsArrowUpCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section className="pre-footer js-menu">
        <Link to={`/`}>
          <img src={theSims4logo} alt="Logo do The Sims 4" />
        </Link>
        <button onClick={scrollToTop}>
          <BsArrowUpCircle />
          Voltar ao Topo
        </button>
      </section>
      <footer className="footer">
        <p>2026</p>
        <p>
          Desenvolvido & Criado por{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/anamariadutra/"
          >
            Ana Maria
          </a>
        </p>
      </footer>
    </>
  );
}
