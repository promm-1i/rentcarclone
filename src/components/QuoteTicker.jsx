import "./QuoteTicker.css";

const names = [
  "김*수", "이*진", "박*영", "최*우", "정*아", "한*민", "오*빈", "장*호",
  "윤*경", "임*재", "강*나", "조*형",
];
const models = [
  "아반XX", "쏘나XX", "그랜XX", "투XX", "싼타XX", "펠리세이XX", "스포티XX", "GV70", "G80", "모델 Y",
];

function buildEntries() {
  return names.map((name, i) => ({
    id: i,
    text: `${name}님이 [${models[i % models.length]}] 견적문의를 남기셨습니다.`,
  }));
}

const entries = buildEntries();
const loopEntries = [...entries, ...entries];

export default function QuoteTicker() {
  return (
    <section className="ticker-section">
      <div className="ticker-inner">
        <h2 className="ticker-heading">
          <span>실시간 견적현황</span>
        </h2>
        <div className="ticker-viewport">
          <ul className="ticker-track">
            {loopEntries.map((e, i) => (
              <li key={`${e.id}-${i}`}>{e.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
