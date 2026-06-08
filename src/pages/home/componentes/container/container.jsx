import "./container.css";
import { ItemCards } from "../../../../components/item-cards/item-cards";

export function Container({ idSection, bdItem, titleContainer }) {
  return (
    <>
      <section id={idSection} className="container">
        <div className="titulo-container">
          <h2>{titleContainer}</h2>
        </div>
        <ItemCards bd={bdItem} />
      </section>
    </>
  );
}
