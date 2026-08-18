import { useEffect, useState } from "react";
import { heroSlides, heroBadge } from "../data/content";
import "./Hero.css";

function CarIllustration() {
  return (
    <svg viewBox="0 0 440 260" className="car-illustration" role="img" aria-label="렌터카 일러스트">
      <defs>
        <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a5f7d" />
          <stop offset="100%" stopColor="#28374c" />
        </linearGradient>
        <radialGradient id="carGlow" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#ffc000" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#ffc000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="220" cy="150" rx="190" ry="90" fill="url(#carGlow)" />
      <ellipse cx="220" cy="222" rx="150" ry="14" fill="#1b2431" opacity="0.15" />

      <path
        d="M55 175 C55 150 75 140 100 138 L130 108 C140 98 155 92 172 92 L268 92 C284 92 298 98 308 109 L336 138 C362 141 382 150 382 175 L382 190 C382 197 376 202 369 202 L68 202 C61 202 55 197 55 190 Z"
        fill="url(#carBody)"
      />
      <path
        d="M140 138 L160 112 C166 104 176 100 186 100 L254 100 C264 100 274 104 280 112 L300 138 Z"
        fill="#dfe8f5"
        opacity="0.9"
      />
      <rect x="55" y="168" width="327" height="10" fill="#ffc000" opacity="0.85" />

      <circle cx="128" cy="205" r="26" fill="#1b2431" />
      <circle cx="128" cy="205" r="11" fill="#aeb8c6" />
      <circle cx="312" cy="205" r="26" fill="#1b2431" />
      <circle cx="312" cy="205" r="11" fill="#aeb8c6" />
    </svg>
  );
}

export default function Hero({ onOpenConsult }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="hero" style={{ background: slide.bg }}>
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-tag">{slide.tag}</p>
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-desc">{slide.desc}</p>

          <div className="hero-actions">
            <button type="button" className="hero-cta-primary" onClick={onOpenConsult}>
              무료 상담 신청
            </button>
            <a href={slide.secondaryHref} className="hero-cta-secondary">
              {slide.secondaryCta}
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
              />
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <CarIllustration />
          <div className="hero-badge">
            <strong>{heroBadge.value}</strong>
            <span>{heroBadge.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
