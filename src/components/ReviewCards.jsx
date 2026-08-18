import { reviews } from "../data/content";
import "./ReviewCards.css";

export default function ReviewCards() {
  return (
    <section className="reviews" id="reviews">
      <div className="section-inner">
        <div className="section-head">
          <h2>신차 출고후기</h2>
          <a href="#" className="section-more">
            전체보기
          </a>
        </div>

        <ul className="review-grid">
          {reviews.map((r) => (
            <li key={r.id} className="review-card">
              <h3>{r.model}</h3>
              <p className="review-customer">{r.customer}</p>
              <p className="review-text">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
