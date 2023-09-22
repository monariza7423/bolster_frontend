import { FC, memo } from "react";
import '../styles/Footer.scss';
import { Link } from "react-router-dom";

export const Footer: FC = memo(() => {
  return (
    <footer>
      <div className="footer_contents">
        <div className="footer_logo">
          <Link to="/">
            <img src="/images/logo_icon.png" alt="footer_logo" />
          </Link>
        </div>

        <nav className="footer_nav">
          <ul>
            <li><span>ABOUT <img src="/images/arrow.png" alt="右矢印" className="footer_arrow" /></span></li>
            <li><Link to="/service"><span>SERVICE <img src="/images/arrow.png" alt="右矢印" className="footer_arrow" /></span></Link></li>
            <li><Link to="/member"><span>MEMBER <img src="/images/arrow.png" alt="右矢印" className="footer_arrow" /></span></Link></li>
            <li><span>RECRUIT <img src="/images/arrow.png" alt="右矢印" className="footer_arrow" /></span></li>
            <li><Link to="/contact"><span>CONTACT <img src="/images/arrow.png" alt="右矢印" className="footer_arrow" /></span></Link></li>
          </ul>
          <li className="privacy_policy"><span>PRIVACY POLICY <img src="/images/arrow.png" alt="右矢印" className="footer_arrow" /></span></li>
        </nav>
      </div>
      <div className="copyright">
        <div className="social_icons">
          <img src="/images/fb.png" alt="FaceBook" className="social_icon" />
          <img src="/images/tw.png" alt="Twitter" className="social_icon" />
        </div>
        <p>Copyright © BOLSTER, INC. All rights reserved.</p>
      </div>
    </footer>
  );
});