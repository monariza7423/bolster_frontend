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
            <li>ABOUT</li>
            <li><Link to="/service">SERVICE</Link></li>
            <li><Link to="/member">MEMBER</Link></li>
            <li>RECRUIT</li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
          <li className="privacy_policy">PRIVACY POLICY</li>
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