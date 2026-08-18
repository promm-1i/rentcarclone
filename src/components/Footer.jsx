import { company, footerColumns } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <span className="footer-logo">{company.name}</span>
            <p>
              고객의 가치를 최우선으로 생각하는
              <br />
              대한민국 No.1 자동차 금융 파트너
            </p>
            <p className="footer-phone">{company.phone}</p>
            <p className="footer-hours">{company.hours}</p>
          </div>

          {footerColumns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          상호명: {company.legalName} | 대표이사: {company.ceo} | 사업자등록번호: {company.bizNo} | 통신판매업신고:{" "}
          {company.mailOrderNo}
          <br />
          주소: {company.address} | 개인정보책임자: {company.privacyOfficer}
          <br />
          COPYRIGHT © CARPLAN RENTCAR. ALL RIGHTS RESERVED. (연습용 클론 프로젝트 — 실제 업체 정보 아님)
        </div>
      </div>
    </footer>
  );
}
