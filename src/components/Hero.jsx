import { useEffect, useState } from "react";
import { heroSlides, heroBadge } from "../data/content";
import "./Hero.css";

export default function Hero({ onOpenConsult }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-emboss">CARPLAN</div>
      <div className="container">
        <div className="carousel-container">
          {heroSlides.map((slide, i) => (
            <div className={`slide ${i === active ? "active" : ""}`} key={slide.id}>
              <div className="hero-text">
                <span className="hero-tag">{slide.tag}</span>
                <h1 className="hero-title">
                  {slide.titleLines.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx < slide.titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="hero-desc">{slide.desc}</p>
                <div className="hero-btns">
                  <button type="button" className="btn btn-primary" onClick={onOpenConsult}>
                    {slide.primaryCta}
                  </button>
                  <a href={slide.secondaryHref} className="btn btn-outline">
                    {slide.secondaryCta}
                  </a>
                </div>
              </div>
              <div className="hero-right">
                <img src={slide.image} alt={slide.imageAlt} className="hero-img" />
                {slide.showBadge && (
                  <div className="trust-badge">
                    <span className="icon">★</span>
                    <div>
                      <span className="num">{heroBadge.value}</span>
                      <span className="label">
                        {heroBadge.label[0]}
                        <br />
                        {heroBadge.label[1]}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="dots">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`${i + 1}번 슬라이드`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
