import { useState } from "react";
import { reviews } from "../data/content";
import "./ReviewCards.css";

const PREVIEW_COUNT = 3;

export default function ReviewCards() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? reviews : reviews.slice(0, PREVIEW_COUNT);

  return (
    <section className="reviews bg-gray" id="reviews">
      <div className="section-inner">
        <div className="sec-header">
          <h2 className="sec-title">진심이 담긴 생생 후기</h2>
          <p className="sec-desc">카플랜렌트카를 직접 이용하신 고객님들의 솔직한 이야기입니다.</p>
        </div>

        <div className="card-grid">
          {visible.map((r) => (
            <div className="review-card" key={r.id}>
              <div className="card-top">
                <img src={r.image} alt={r.model} className="card-thumb" />
                <div className="card-info">
                  <h4>{r.model}</h4>
                  <p>{r.customer}</p>
                </div>
              </div>

              <div className="card-stats">
                <div className="card-stat">
                  <small>인도기간</small>
                  <span>{r.deliveryDays}</span>
                </div>
                <div className="card-stat">
                  <small>월 렌트료</small>
                  <span>{r.monthlyPayment}</span>
                </div>
              </div>

              <span className="pill">{r.point}</span>
              <p className="card-text">{r.text}</p>
            </div>
          ))}
        </div>

        {reviews.length > PREVIEW_COUNT && (
          <div className="load-more">
            <button type="button" className="btn btn-outline" onClick={() => setExpanded((v) => !v)}>
              {expanded ? "접기" : "후기 더보기 +"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
