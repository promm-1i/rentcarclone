import { company, navMenu } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links section-inner">
        {navMenu.map((item) => (
          <div key={item.label} className="footer-col">
            <a href={item.href} className="footer-col-title">
              {item.label}
            </a>
            {item.sub && (
              <ul>
                {item.sub.map((sub) => (
                  <li key={sub.label}>
                    <a href={sub.href}>{sub.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="footer-info section-inner">
        <p className="footer-logo">{company.name}</p>
        <p>
          {company.address} | Tel : {company.phone} | Fax : {company.fax} |
          Mobile : {company.mobile}
        </p>
        <p>
          E-mail : {company.email} | 사업자등록번호 : {company.bizNo} |
          카카오톡ID : {company.kakaoId}
        </p>
        <p className="footer-copy">
          Copyright &copy; {company.name}. All rights reserved. (연습용 클론
          프로젝트 — 실제 업체 정보 아님)
        </p>
      </div>
    </footer>
  );
}
