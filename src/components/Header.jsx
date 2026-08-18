import { company, navMenu } from "../data/content";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="logo">
          {company.name}
        </a>

        <nav className="gnb">
          <ul>
            {navMenu.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
                {item.sub && (
                  <ul className="sub-menu">
                    {item.sub.map((sub) => (
                      <li key={sub.label}>
                        <a href={sub.href}>{sub.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a href={`tel:${company.phone}`} className="header-phone">
          {company.phone}
        </a>
      </div>
    </header>
  );
}
