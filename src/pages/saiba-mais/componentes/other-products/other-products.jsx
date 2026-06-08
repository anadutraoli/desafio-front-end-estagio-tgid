  import { ItemCards } from "../../../../components/item-cards/item-cards";

  export function OtherProducts({ bdItem }) {
      return (
          <>
        <section className="container">
          <div className="titulo-container">
            <h2>Outros Produtos</h2>
          </div>
          <ItemCards bd={bdItem} />
        </section>
      </>
      )
  }
