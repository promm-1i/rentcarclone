import { promoBanners } from "../data/content";
import "./PromoBanners.css";

const ICON_PATHS = {
  warning: [
    "M12 2L1 21h22L12 2zm0 4.45L19.03 19H4.97L12 6.45zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z",
  ],
  clock: [
    "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  ],
  chart: [
    "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
    "M7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z",
  ],
  cube: [
    "M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.09-.34.14-.57.14s-.41-.05-.57-.14l-7.9-4.44c-.31-.17-.53-.5-.53-.88v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.09.34-.14.57-.14s.41.05.57.14l7.9 4.44c.31.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15zM5 15.91l6 3.38v-6.71L5 9.21v6.7zm14 0v-6.7l-6 3.37v6.71l6-3.38z",
  ],
};

export default function PromoBanners() {
  return (
    <section className="promo-banners bg-gray" id="promo">
      <div className="section-inner promo-grid">
        {promoBanners.map((b) => (
          <a href={b.href} className="promo-banner" style={{ background: b.gradient }} key={b.id}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              {ICON_PATHS[b.icon].map((d, i) => (
                <path d={d} key={i} />
              ))}
            </svg>
            <h3>
              {b.title[0]}
              <br />
              {b.title[1]}
            </h3>
            <p>{b.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
