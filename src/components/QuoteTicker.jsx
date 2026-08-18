import { useEffect, useState } from "react";
import "./QuoteTicker.css";

const names = [
  "김*수", "이*진", "박*영", "최*우", "정*아", "한*민", "오*빈", "장*호",
  "윤*경", "임*재", "강*나", "조*형",
];
const models = [
  "아반XX", "쏘나XX", "그랜XX", "투XX", "싼타XX", "펠리세이XX", "스포티XX", "GV70", "G80", "모델 Y",
];

const entries = names.map(
  (name, i) => `${name}님이 [${models[i % models.length]}] 견적문의를 남기셨습니다.`
);

export default function QuoteTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((v) => (v + 1) % entries.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="ticker-section">
      <div className="ticker-inner">
        <span className="ticker-badge">실시간 견적현황</span>
        <div className="ticker-viewport">
          <p key={index} className="ticker-line">
            {entries[index]}
          </p>
        </div>
      </div>
    </section>
  );
}
