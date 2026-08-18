import { useEffect, useState } from "react";
import { tickerItems } from "../data/content";
import "./QuoteTicker.css";

export default function QuoteTicker() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % tickerItems.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ticker-section">
      <div className="container ticker-wrap">
        <span className="ticker-label">REAL-TIME QUOTE</span>
        <div className="ticker-content">
          {tickerItems.map((item, i) => (
            <div className={`ticker-item ${i === active ? "active" : ""}`} key={item.id}>
              <span>
                {item.region} {item.customer} 고객님
              </span>{" "}
              | <b>{item.model}</b> {item.status} ({item.timeAgo})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
