import { FC, memo } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Link } from "react-router-dom";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import '../styles/Top.scss';

export const Top: FC = memo(() => {
  return(
    <>
      <Header />
      <div className="wrapper">
        <div className="main_visual">
          <div className="sp_image">
            <img src="/images/sp_image2.png" alt="ケータイ" className="sp_img" />
          </div>
          <div className="kikyu_img_1">
            <img src="/images/kikyu1.png" alt="気球１" />
          </div>
          <div className="kikyu_img_2">
            <img src="/images/kikyu2.png" alt="気球１" />
          </div>
          <div className="kikyu_img_3">
            <img src="/images/kikyu3.png" alt="気球１" />
          </div>
          <div className="kikyu_img_4">
            <img src="/images/kikyu4.png" alt="気球１" />
          </div>
          <div className="kikyu_img_5">
            <img src="/images/kikyu5.png" alt="気球１" />
          </div>
          <div className="store_badges_pc">
            <img src="/images/google_play.png" alt="googl_play" className="google_badge_pc" />
            <img src="/images/apple_store.svg" alt="app_store" className="app_badge_pc" />
          </div>
        </div>
        <div className="store_badges_sp">
          <img src="/images/google_play.png" alt="googl_play" className="google_badge_sp" />
          <img src="/images/apple_store.svg" alt="app_store" className="app_badge_sp" />
        </div>

        <div className="home_left">
          <div className="home_left_contents">
            <h1 className="article_title">ABOUT</h1>
            <p className="sub_title">会社概要</p>
            <p className="info">企業理念、CEOメッセージ、会社情報などを詳しくご紹介しています。</p>
            {/* デザイン上、aboutだが掲示板へ飛ぶように設定 */}
            <Link to="/thread_bbs" className="more_btn">
              MORE <img src="/images/arrow2.png" alt="矢印" />
            </Link>
          </div>
          <div className="home_left_img">
          </div>
        </div>
        
        <div className="home_right">
          <div className="home_right_img1">
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

        <div className="home_center_video">
          <h1 className="article_title">MEMBER</h1>
          <p className="sub_title">メンバー</p>
          <p className="info">
            BOLSTERで働くメンバーをご紹介しています。こちらの動画はメンバーが実際に働く様子です。
          </p>
          <div className="video">
            <video autoPlay muted loop>
              <source src="/video/members_prod.mp4" type="video/mp4"/>
            </video>
          </div>
          <Link to="/service" className="more_btn_center">
            ALL MEMBER <img src="/images/arrow2.png" alt="矢印" />
          </Link>
        </div>

        <div className="home_right">
          <div className="home_right_img2">
          </div>
          <div className="home_right_contents">
            <h1 className="article_title">RECRUIT</h1>
            <p className="sub_title">採用情報</p>
            <p className="info">
            BOLSTERでは、企業理念「世の中の1人でも多くの人をHAPPYに」に共感し共に創出・拡大推進・支えて頂ける方を募集しています。
            </p>
            <Link to="/" className="more_btn">
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
          <Link to="/contact" className="more_btn_center">
            CONTACT <img src="/images/arrow2.png" alt="矢印" />
          </Link>
        </div>
      </div>
      <div className="top_btn">
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
});