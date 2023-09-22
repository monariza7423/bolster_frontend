import { FC, memo } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import { MemberListItem } from "../components/member/MemberListItem";
import '../styles/Member.scss';

export const Member: FC = memo(() => {
  return (
    <>
      <Header />
      <div className="top_box_member">
        <div className="member_img">
          <span className="page_title_member">MEMBER</span>
          <img src="/images/member_2.jpg" alt="MEMBER" />
        </div>
      </div>
      <div className="container_member">
        <div className="member_contents">
          <p className="phrase">
            BOLSTERで働く仲間を紹介します。企業理念の旗のもと個性豊かなメンバーが揃っています。
          </p>
        </div>
        <div className="member_ceo">
          <img src="/images/t.matsuda.png" alt="CEO" />
          <div className="member_ceo_position">
            <p className="position_jp_1">代表取締役社長</p>
            <h1 className="position_eg">CEO</h1>
          </div>
        </div>
        <div className="member_introduction">
          <h3 className="member_name_eg_1">Tadahiro Matsuda</h3>
          <p className="member_name_jp_1">松田忠浩</p>
          <p className="member_detail">
            「世の中の1人でも多くの人をHAPPYに。」の企業理念を掲げ、2016年2月に独立。前職のソフトバンク株式会社時代には、15年に渡りインターネット事業（EC事業、デジタル広告事業）を責任者として牽引。
            関西学院大学卒業。神戸市出身。ZETA株式会社事業開発担当兼務。
          </p>
        </div>
        <div className="member_cto">
          <img src="/images/n.takada.jpg" alt="CEO" />
          <div className="member_cto_position">
            <p className="position_jp_2">取締役</p>
            <h1 className="position_eg">CTO</h1>
          </div>
        </div>
        <div className="member_introduction">
          <h3 className="member_name_eg_2">Naoyuki Takada</h3>
          <p className="member_name_jp_2">高田尚幸</p>
          <p  className="member_detail">
            前職でバックエンド、フロントエンド、ネイティブアプリ開発、ディレクター、新人教育など開発に掛かる業務を一通り経験し、現在BOLSTERの開発業務全般を管理している。
            常にユーザー目線を第一に熟考できるチーム作りを目指す。
          </p>
        </div>
        <div className="member_list_item">
          <MemberListItem />
        </div>
      </div>
      <div className="top_btn">
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
});