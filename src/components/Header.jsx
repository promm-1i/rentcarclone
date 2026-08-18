import { company, navMenu } from "../data/content";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          {company.name}
        </a>

        <nav className="gnb">
          {navMenu.map((item) => (
            <div className="gnb-item" key={item.label}>
              <a href={item.href}>{item.label}</a>
              {item.sub && (
                <div className="dropdown">
                  {item.sub.map((sub) => (
                    <a href={sub.href} key={sub.label}>
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a href={`tel:${company.phone}`} className="header-phone">
          <small>365일 상담</small>
          {company.phone}
        </a>
      </div>
    </header>
  );
}
