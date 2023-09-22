import { FC, memo } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import '../styles/ContactComplete.scss';
import { Link } from "react-router-dom";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";

export const ContactComplete: FC = memo(() => {
  return (
    <>
      <Header />
      <div className="top_box_complete">
        <div className="complete_img">
          <span className="page_title_complete">CONTACT</span>
          <img src="/images/Contact.jpg" alt="CONATCT" />
        </div>
        <div className="container_complete">
          <div className="complete_message">
            <p>問い合わせ内容を受け付けました。1週間以内に、担当者より折り返しご連絡いたします。</p>
          </div>
          <div className="complete_btn">
            <button>
              <Link to="/contact">
                Page Top <img src="/images/arrow2.png" alt="矢印" />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="top_btn">
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
})