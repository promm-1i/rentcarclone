import { useState } from "react";
import { company } from "../data/content";
import "./FloatingContact.css";

export default function FloatingContact() {
  const [open, setOpen] = useState(true);
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className={`floating-contact ${open ? "open" : "closed"}`}>
      <button
        type="button"
        className="floating-toggle"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "닫기 ▸" : "◂ 빠른상담"}
      </button>

      {open && (
        <div className="floating-panel">
          <div className="floating-block quick-form">
            <p className="floating-label">빠른상담문의</p>
            {sent ? (
              <p className="floating-success">상담 신청이 접수되었습니다.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="이름" required />
                <input type="text" placeholder="연락처" required />
                <label className="floating-agree">
                  <input type="checkbox" required />
                  <a href="#privacy">개인정보 취급방침</a> 동의
                </label>
                <button type="submit" className="floating-submit">
                  상담요청하기
                </button>
              </form>
            )}
          </div>

          <a
            href={company.kakaoUrl}
            className="floating-block channel kakao"
          >
            <span className="channel-badge">KAKAOTALK</span>
            <strong>카카오톡 상담</strong>
            <span>실시간 상담 바로가기</span>
          </a>

          <a
            href={company.naverTalkUrl}
            className="floating-block channel naver"
          >
            <span className="channel-badge">CONTACT US</span>
            <strong>네이버톡톡상담</strong>
            <span>실시간 상담 바로가기</span>
          </a>

          <a href={`tel:${company.phone}`} className="floating-block channel phone">
            <span className="channel-badge">CALL</span>
            <strong>{company.phone}</strong>
            <span>전화상담 바로가기</span>
          </a>
        </div>
      )}
    </div>
  );
}
