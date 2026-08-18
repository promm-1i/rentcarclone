import { useEffect, useState } from "react";
import { company } from "../data/content";
import "./StatsBar.css";

function getElapsed(fromDate) {
  const start = new Date(fromDate).getTime();
  const now = Date.now();
  let diff = Math.max(0, now - start);

  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = Math.floor(diff / msPerYear);
  diff -= years * msPerYear;

  const msPerMonth = (1000 * 60 * 60 * 24 * 365.25) / 12;
  const months = Math.floor(diff / msPerMonth);
  diff -= months * msPerMonth;

  const msPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / msPerDay);
  diff -= days * msPerDay;

  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
  diff -= hours * 1000 * 60 * 60;
  const minutes = String(Math.floor(diff / (1000 * 60))).padStart(2, "0");
  diff -= minutes * 1000 * 60;
  const seconds = String(Math.floor(diff / 1000)).padStart(2, "0");

  return `${years}년 ${months}개월 ${days}일 ${hours}:${minutes}:${seconds}`;
}

const stats = [
  { label: "상담문의 today", value: "1,637" },
  { label: "견적문의 이번달", value: "21,578" },
  { label: "누적 계약 대수", value: "113" },
  { label: "영업사원", value: "24" },
];

export default function StatsBar() {
  const [elapsed, setElapsed] = useState(() => getElapsed(company.founded));

  useEffect(() => {
    const timer = setInterval(() => setElapsed(getElapsed(company.founded)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="stats-bar">
      <div className="stats-inner">
        <div className="stats-counter">
          <p>첫 번째 차량 계약일부터</p>
          <p className="counter-value">{elapsed}</p>
          <p>동안 자동차금융전문가로 일하고 있습니다.</p>
        </div>

        <ul className="stats-grid">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
