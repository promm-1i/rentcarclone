import { useState } from "react";
import { reviews } from "../data/content";
import "./ReviewCards.css";

const PREVIEW_COUNT = 3;

export default function ReviewCards() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? reviews : reviews.slice(0, PREVIEW_COUNT);

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
          {visible.map((r) => (
            <li key={r.id} className="review-card">
              <h3>{r.model}</h3>
              <p className="review-customer">{r.customer}</p>
              <p className="review-text">{r.text}</p>
            </li>
          ))}
        </ul>

        {reviews.length > PREVIEW_COUNT && (
          <button
            type="button"
            className="review-toggle"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "접기" : `후기 더보기 (${reviews.length - PREVIEW_COUNT})`}
          </button>
        )}
      </div>
    </section>
  );
}
