import { useState } from "react";
import { paymentModels } from "../data/content";
import "./PaymentTable.css";

export default function PaymentTable({ onOpenConsult }) {
  const [selectedId, setSelectedId] = useState(paymentModels[0].id);
  const selected = paymentModels.find((m) => m.id === selectedId);

  return (
    <section className="payment-table" id="payment">
      <div className="section-inner">
        <div className="sec-header">
          <h2 className="sec-title">월 대여료 비교 견적</h2>
          <p className="sec-desc">실시간 기준 가장 인기 있는 모델들의 예상 이용료를 확인하세요.</p>
        </div>

        <div className="model-filters">
          {paymentModels.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`model-chip ${m.id === selectedId ? "active" : ""}`}
              onClick={() => setSelectedId(m.id)}
            >
              {m.name}
            </button>
          ))}
        </div>

        <div className="payment-detail">
          <div className="payment-img-sec">
            <img src={selected.image} alt={selected.name} />
          </div>

          <div className="payment-data-sec">
            <h3>
              {selected.name} ({selected.year})
            </h3>

            <div className="data-row">
              <span className="data-lbl">차량 기본 가격</span>
              <span className="data-val">{selected.price}</span>
            </div>
            <div className="data-row">
              <span className="data-lbl">장기렌트 (월 이용료)</span>
              <span className="data-val accent">{selected.rent}</span>
            </div>
            <div className="data-row">
              <span className="data-lbl">자동차리스 (월 이용료)</span>
              <span className="data-val accent">{selected.lease}</span>
            </div>
            <div className="data-row">
              <span className="data-lbl">선수금/보증금 조건</span>
              <span className="data-val">{selected.downPayment}</span>
            </div>

            <div className="payment-cta">
              <button type="button" className="btn btn-primary" onClick={onOpenConsult}>
                상세 견적 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
