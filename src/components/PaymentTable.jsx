import { useState } from "react";
import { paymentModels } from "../data/content";
import "./PaymentTable.css";

export default function PaymentTable() {
  const [selectedId, setSelectedId] = useState(paymentModels[0].id);
  const selected = paymentModels.find((m) => m.id === selectedId);

  return (
    <section className="payment-table" id="payment">
      <div className="section-inner">
        <div className="section-head">
          <h2>전차종 월납입금 확인하기</h2>
        </div>

        <div className="payment-chips">
          {paymentModels.map((m) => (
            <button
              key={m.id}
              type="button"
              className={`payment-chip ${m.id === selectedId ? "active" : ""}`}
              onClick={() => setSelectedId(m.id)}
            >
              {m.name}
            </button>
          ))}
        </div>

        <div className="payment-detail">
          <div className="payment-detail-thumb" aria-hidden="true" />

          <div className="payment-detail-body">
            <h3>{selected.name}</h3>
            <p className="payment-detail-price">차량가 {selected.price}</p>

            <ul className="payment-detail-rows">
              <li>
                <span>장기렌트</span>
                <strong>{selected.rent}</strong>
                <em>/ 월</em>
              </li>
              <li>
                <span>리스</span>
                <strong>{selected.lease}</strong>
                <em>/ 월</em>
              </li>
            </ul>

            <p className="payment-detail-note">
              화면의 금액은 조건별 예상 금액이며, 정확한 월 납입금은 상담을
              통해 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
