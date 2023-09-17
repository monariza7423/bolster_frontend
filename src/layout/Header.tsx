import { FC, memo } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.scss';

export const Header: FC = memo(() => {
  return (
    <header>
      <div className="site_logo">
        <h1>
          <Link to="/">
            <img src="/images/bolster_logo_white.png" alt="bolster logo" />
          </Link>
        </h1>
      </div>
      <nav className="header_nav">
        <ul>
          <li>ABOUT</li>
          <li><Link to="/service">SERVICE</Link></li>
          <li><Link to="/member">MEMBER</Link></li>
          <li><Link to="/recruit">RECRUIT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
});