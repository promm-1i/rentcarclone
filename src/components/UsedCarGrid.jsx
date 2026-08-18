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
              <h3>{car.name}</h3>
              <p>{car.spec}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
