import { useEffect, useState } from "react";
import { company, stats } from "../data/content";
import "./StatsBar.css";

function formatElapsed(fromDate) {
  const start = new Date(fromDate).getTime();
  const diff = Math.max(0, Date.now() - start);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  return `${days.toLocaleString()}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function StatsBar() {
  const [elapsed, setElapsed] = useState(() => formatElapsed(company.founded));

  useEffect(() => {
    const timer = setInterval(() => setElapsed(formatElapsed(company.founded)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stats-bar">
      <div className="container stats-grid">
        <div className="live-counter">
          <span className="live-label">System Active Since {company.founded}</span>
          <span className="live-time">{elapsed}</span>
        </div>

        {stats.map((s) => (
          <div className="stat-item" key={s.id}>
            <span className="stat-val">{s.value}</span>
            <span className="stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
