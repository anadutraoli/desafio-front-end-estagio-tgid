import "./skeleton-card.css";

export function SkeletonCard({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="item-cards" key={i}>
        <div className="skeleton-img skeleton-card-animacao"></div>
        <div
          className="skeleton-texto skeleton-card-animacao"
          style={{ width: "100%" }}
        ></div>
        <div
          className="skeleton-texto skeleton-card-animacao"
          style={{ width: "80%" }}
        ></div>
        <div className="skeleton-btn skeleton-card-animacao"></div>
        <div className="skeleton-btn skeleton-card-animacao"></div>
      </div>
    ));
}
