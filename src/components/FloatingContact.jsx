import { useState } from "react";
import { company } from "../data/content";
import "./FloatingContact.css";

const ICONS = {
  call: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
  kakao: "M12 3C7.029 3 3 6.124 3 9.975c0 2.49 1.708 4.675 4.316 5.894l-.841 3.107c-.071.261.084.524.341.587.09.022.183.018.267-.012l3.65-2.41c.414.053.836.082 1.267.082 4.971 0 8.975-3.124 8.975-6.975C20.975 6.124 16.971 3 12 3z",
};
const QUOTE_ICON = [
  "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
  "M7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z",
];

function Icon({ d, fill }) {
  return (
    <svg width="24" height="24" fill={fill || "currentColor"} viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  );
}

function QuoteIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      {QUOTE_ICON.map((d, i) => (
        <path d={d} key={i} />
      ))}
    </svg>
  );
}

export default function FloatingContact({ open, onOpenChange }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  function closePanel() {
    onOpenChange(false);
    setSent(false);
  }

  const form = (
    <div className="contact-popover">
      <div className="popover-head">
        <p>빠른 견적문의</p>
        <button type="button" className="popover-close" onClick={closePanel} aria-label="닫기">
          ×
        </button>
      </div>

      {sent ? (
        <p className="popover-success">상담 신청이 접수되었습니다.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="이름" required />
          <input type="text" placeholder="연락처" required />
          <label className="popover-agree">
            <input type="checkbox" required />
            <a href="#privacy">개인정보 취급방침</a> 동의
          </label>
          <button type="submit" className="popover-submit">
            상담요청하기
          </button>
        </form>
      )}
    </div>
  );

  return (
    <>
      <div className="floating-widget">
        {open && form}
        <a href={`tel:${company.phone}`} className="f-icon red" title="전화 상담">
          <Icon d={ICONS.call} fill="#fff" />
        </a>
        <a href={company.kakaoUrl} className="f-icon kakao" title="카카오톡">
          <Icon d={ICONS.kakao} fill="#3c1e1e" />
        </a>
        <button type="button" className="f-icon" title="간편견적" onClick={() => onOpenChange(!open)}>
          <span style={{ color: "var(--navy)" }}>
            <QuoteIcon />
          </span>
        </button>
      </div>

      <div className="mobile-bar">
        {open && form}
        <a href={`tel:${company.phone}`} className="mobile-bar-item">
          <Icon d={ICONS.call} />
          전화상담
        </a>
        <a href={company.kakaoUrl} className="mobile-bar-item">
          <Icon d={ICONS.kakao} fill="#fee500" />
          카톡상담
        </a>
        <button type="button" className="mobile-bar-item quote" onClick={() => onOpenChange(!open)}>
          <QuoteIcon size={20} />
          빠른견적
        </button>
      </div>
    </>
  );
}
