import { useEffect, useState } from "react";
import { heroSlides } from "../data/content";
import "./Hero.css";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="hero" style={{ background: slide.bg }}>
      <div className="hero-inner">
        <p className="hero-tag">{slide.tag}</p>
        <h1 className="hero-title">{slide.title}</h1>
        <p className="hero-desc">{slide.desc}</p>
        <a href={slide.href} className="hero-cta">
          {slide.cta}
        </a>
      </div>

      <div className="hero-dots">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
            aria-label={`${i + 1}번 슬라이드`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
