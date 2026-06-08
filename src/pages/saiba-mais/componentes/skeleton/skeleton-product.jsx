import "./skeleton-product.css";

export function SkeletonProduct() {
  return (
    <div className="preview-container">
      <div className="preview-img">
        <div className="skeleton-img skeleton-animacao" style={{ height: "450px", width: "100%" }}></div>
      </div>

      <div className="preview-detalhes">
        <div className="skeleton-animacao" style={{ height: "40px", width: "70%", borderRadius: "6px", marginBottom: "10px" }}></div>
        
        <div className="skeleton-animacao" style={{ height: "18px", width: "100%", borderRadius: "4px"}}></div>
        <div className="skeleton-animacao" style={{ height: "18px", width: "95%", borderRadius: "4px"}}></div>
        <div className="skeleton-animacao" style={{ height: "18px", width: "40%", borderRadius: "4px", marginBottom: "10px" }}></div>
        
        <div className="skeleton-animacao" style={{ height: "28px", width: "30%", borderRadius: "4px", marginBottom: "10px" }}></div>

        <div className="skeleton-animacao" style={{ height: "45px", width: "100%", borderRadius: "8px"}}></div>
      </div>
    </div>
  );
}