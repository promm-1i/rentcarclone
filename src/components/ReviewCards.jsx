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
              <div className="review-thumb" aria-hidden="true" />
              <div className="review-body">
                <h3>{r.model}</h3>
                <p className="review-customer">{r.customer}</p>

                <ul className="review-stats">
                  <li>
                    <span>출고기간</span>
                    <strong>{r.deliveryDays}</strong>
                  </li>
                  <li>
                    <span>월 납입금</span>
                    <strong>{r.monthlyPayment}</strong>
                  </li>
                </ul>

                <p className="review-point">{r.point}</p>
                <p className="review-text">{r.text}</p>
              </div>
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
