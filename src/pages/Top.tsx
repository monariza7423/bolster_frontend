import { FC, memo } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import '../styles/Top.scss';
import { Link } from "react-router-dom";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";

export const Top: FC = memo(() => {
  return(
    <>
      <Header />
      <div className="container">
        <div className="main_visual"></div>
        <div className="home_left">
          <div className="home_left_contents">
            <h1 className="article_title">ABOUT</h1>
            <p className="sub_title">会社概要</p>
            <p className="info">企業理念、CEOメッセージ、会社情報などを詳しくご紹介しています。</p>
            <Link to="/service" className="more_btn">
              MORE <img src="/images/arrow2.png" alt="矢印" />
            </Link>
          </div>
          <div className="home_left_img">
            <img src="/images/about.jpg" alt="ABOUT" />
          </div>
        </div>
        
        <div className="home_right">
          <div className="home_right_img">
            <img src="/images/service.jpg" alt="SERVICE" />
          </div>
          <div className="home_right_contents">
            <h1 className="article_title">SERVICE</h1>
            <p className="sub_title">サービス</p>
            <p className="info">
              企業や組織を支えるBtoB事業や人を元気づけるBtoC事業など弊社で提供しているサービスをご紹介しています。
            </p>
            <Link to="/service" className="more_btn">
              MORE <img src="/images/arrow2.png" alt="矢印" />
            </Link>
          </div>
        </div>

        <div className="home_center">
          <h1 className="article_title">MEMBER</h1>
          <p className="sub_title">メンバー</p>
          <p className="info">
            BOLSTERで働くメンバーをご紹介しています。こちらの動画はメンバーが実際に働く様子です。
          </p>
          <div className="video">
            <video controls autoPlay muted loop>
              <source src="/video/members_prod.mp4" type="video/mp4"/>
            </video>
          </div>
          <Link to="/service" className="more_btn_center">
            ALL MEMBER <img src="/images/arrow2.png" alt="矢印" />
          </Link>
        </div>

        <div className="home_right">
          <div className="home_right_img">
            <img src="/images/recruit.jpg" alt="RECRUIT" />
          </div>
          <div className="home_right_contents">
            <h1 className="article_title">RECRUIT</h1>
            <p className="sub_title">採用情報</p>
            <p className="info">
            BOLSTERでは、企業理念「世の中の1人でも多くの人をHAPPYに」に共感し共に創出・拡大推進・支えて頂ける方を募集しています。
            </p>
            <Link to="/service" className="more_btn">
              MORE <img src="/images/arrow2.png" alt="矢印" />
            </Link>
          </div>
        </div>

        <div className="home_center">
          <h1 className="article_title">CONTACT</h1>
          <p className="sub_title">お問い合わせ</p>
          <p className="info">
          WEBサイト制作やシステム開発、デジタルマーケティング支援などのご相談、BOLSTERに対するご意見・ご要望などがございましたら、お気軽にお問い合わせください。
          </p>
          <Link to="/service" className="more_btn_center">
            ALL MEMBER <img src="/images/arrow2.png" alt="矢印" />
          </Link>
        </div>
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
    
  );
});