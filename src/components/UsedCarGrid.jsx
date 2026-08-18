import { usedCars } from "../data/content";
import "./UsedCarGrid.css";

export default function UsedCarGrid() {
  return (
    <section className="used-cars" id="used-car">
      <div className="section-inner">
        <div className="sec-header">
          <h2 className="sec-title">실속 있는 중고 렌트/리스</h2>
          <p className="sec-desc">신차급 컨디션의 차량을 거품 없는 가격으로 제안합니다.</p>
        </div>

        <div className="card-grid">
          {usedCars.map((car) => (
            <div className="used-card" key={car.id}>
              <div className="used-img-wrap">
                <img src={car.image} alt={car.name} className="used-img" />
                <div className="used-tags">
                  <span className="tag-pill">{car.mileage}</span>
                  <span className="tag-pill">{car.remaining}</span>
                </div>
              </div>
              <div className="used-content">
                <h3 className="used-name">{car.name}</h3>
                <p className="used-spec">{car.spec}</p>
                <div className="used-price-row">
                  <span className="price-label">월 이용료</span>
                  <span className="price-val">
                    {car.monthlyPayment}
                    <small>만원~</small>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
