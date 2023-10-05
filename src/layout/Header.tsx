import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.scss';

export const Header: FC = memo(() => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <header>
      <div className="header_contents">
        <div className="site_logo">
          <h1>
            <Link to="/">
              <img src="/images/bolster_logo_white.png" alt="bolster logo" />
            </Link>
          </h1>
        </div>
        <button className="burger" onClick={() => setNavOpen(!isNavOpen)}>
          <div className={`line1 ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`line2 ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`line3 ${isNavOpen ? 'open' : ''}`}></div>
        </button>
        <nav className={`header_nav ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/thread_bbs"><span>BBS <img src="/images/arrow_header.png" alt="右矢印" className="header_arrow" /></span></Link></li>
            <li><Link to="/service"><span>SERVICE <img src="/images/arrow_header.png" alt="右矢印" className="header_arrow" /></span></Link></li>
            <li><Link to="/member"><span>MEMBER <img src="/images/arrow_header.png" alt="右矢印" className="header_arrow" /></span></Link></li>
            <li><span>RECRUIT <img src="/images/arrow_header.png" alt="右矢印" className="header_arrow" /></span></li>
            <li className="contact_button"><Link to="/contact">CONTACT <img src="/images/arrow2.png" alt="右矢印" /></Link></li>
            <li className="header_responsive">
              <div className="social-icon">
                <img src="/images/fb.png" alt="facebook" className="fb" />
                <img src="/images/tw.png" alt="twitter" className="tw" />
              </div>
              <p className="mission-statement">世の中の多くの人をハッピーに。</p>
            </li>
          </ul>
        </nav>
        <div className="black-dg js-black-dg"></div>
      </div>
    </header>
  );
});