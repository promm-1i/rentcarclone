import { useState } from "react";
import { company } from "../data/content";
import "./FloatingContact.css";

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
      <div className="contact-rail">
        {open && form}
        <a href={`tel:${company.phone}`} className="rail-btn phone" title="전화상담">
          <span>전화</span>
        </a>
        <a href={company.kakaoUrl} className="rail-btn kakao" title="카카오톡 상담">
          <span>카톡</span>
        </a>
        <button
          type="button"
          className="rail-btn quote"
          title="견적문의"
          onClick={() => onOpenChange(!open)}
        >
          <span>견적</span>
        </button>
      </div>

      <div className="contact-bottombar">
        {open && form}
        <a href={`tel:${company.phone}`} className="bar-btn">
          전화상담
        </a>
        <a href={company.kakaoUrl} className="bar-btn">
          카톡상담
        </a>
        <button type="button" className="bar-btn quote" onClick={() => onOpenChange(!open)}>
          견적문의
        </button>
      </div>
    </>
  );
}
