import { paymentModels } from "../data/content";
import "./PaymentTable.css";

export default function PaymentTable() {
  return (
    <section className="payment-table" id="payment">
      <div className="section-inner">
        <div className="section-head">
          <h2>전차종 월납입금 확인하기</h2>
        </div>

        <div className="payment-tabs">
          {paymentModels.map((m) => (
            <span key={m.id} className="payment-tab">
              {m.name}
            </span>
          ))}
        </div>

        <div className="payment-list-scroll">
          <ul className="payment-list">
            {paymentModels.map((m) => (
              <li key={m.id} className="payment-card">
                <div className="payment-thumb" aria-hidden="true" />
                <h3>{m.name}</h3>
                <p className="payment-price">차량가 {m.price}</p>
                <ul className="payment-rows">
                  <li>
                    <span>장기렌트</span>
                    <strong>{m.rent}</strong>
                  </li>
                  <li>
                    <span>리스</span>
                    <strong>{m.lease}</strong>
                  </li>
                </ul>
                <p className="payment-note">
                  모델, 기간에 따른 할부·리스·렌트 실제 월 납입금 확인
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
