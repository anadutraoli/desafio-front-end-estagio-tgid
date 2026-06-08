import { useParams } from "react-router-dom";
import { ProductDetail } from "./componentes/product-detail/product-detail";
import { OtherProducts } from "./componentes/other-products/other-products";

export function SaibaMais() {
  const { categoria } = useParams()
  return (
    <div className="card-container">
      <ProductDetail />

      <hr className="divisor" />
      
      <OtherProducts bdItem={categoria} titleOthers={categoria}  />
    </div>
  );
}
