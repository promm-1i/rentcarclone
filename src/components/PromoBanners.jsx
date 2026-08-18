import { promoBanners } from "../data/content";
import "./PromoBanners.css";

export default function PromoBanners() {
  return (
    <section className="promo-banners" id="quick-delivery">
      <div className="section-inner">
        <ul className="promo-grid">
          {promoBanners.map((b) => (
            <li key={b.id}>
              <a href={b.href} className="promo-card">
                <p className="promo-subtitle">{b.subtitle}</p>
                <h3>{b.title}</h3>
                <span className="promo-desc">{b.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
