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
            <li>SERVICE</li>
            <li>MEMBER</li>
            <li>RECRUIT</li>
            <li>CONTACT</li>
          </ul>
          <li className="privacy_policy">PRIVACY POLICY</li>
        </nav>
      </div>
      <div className="copyright">
        <p>Copyright © BOLSTER, INC. All rights reserved.</p>
      </div>
    </footer>
  );
});