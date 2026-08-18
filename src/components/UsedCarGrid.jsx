import { usedCars } from "../data/content";
import "./UsedCarGrid.css";

export default function UsedCarGrid() {
  return (
    <section className="used-cars" id="used-car">
      <div className="section-inner">
        <div className="section-head">
          <h2>중고렌터카</h2>
          <a href="#" className="section-more">
            차량목록 보기
          </a>
        </div>

        <ul className="used-car-grid">
          {usedCars.map((car) => (
            <li key={car.id} className="used-car-card">
              <div className="used-car-thumb" aria-hidden="true" />
              <div className="used-car-body">
                <h3>{car.name}</h3>
                <p className="used-car-spec">{car.spec}</p>
                <ul className="used-car-stats">
                  <li>{car.mileage}</li>
                  <li>{car.remaining}</li>
                </ul>
                <p className="used-car-payment">
                  월 <strong>{car.monthlyPayment}</strong>부터
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
