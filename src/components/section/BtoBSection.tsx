import { FC, memo } from "react";
import { Link } from "react-router-dom";
import '../../styles/BtoBSection.scss';

type BtoBSectionProps = {
  className?: string;
}

export const BtoBSection: FC<BtoBSectionProps> = memo(({className}) => {
  return (
    <div className={`section ${className}`}>
          <div className="service_right">
            <div className="service_right_img">
              <img src="/images/btob1.jpg" alt="ABOUT" />
            </div>
            <div className="service_right_contents">
              <p className="service_sub_title">SERVICE 01</p>
              <h1 className="service_article_title">
                WEBサイト制作<br className="break1" />
                システム開発<br className="break2" />
                支援事業
              </h1>
              <p className="service_info">
                WEBサイトの制作やECサイト・予約システムの構築など、企業の事業を支援するためのシステム開発を行います。設計、デザイン、ページ制作、バックエンド開発、セキュリティ対策など全てを内製化にて一気通貫で実施可能です。
              </p>
              <Link to="/contact" className="more_btn_btob">
                CONTACT <img src="/images/arrow2.png" alt="矢印" />
              </Link>
            </div>
          </div>
          
          <div className="service_left">
            <div className="service_left_contents">
              <p className="service_sub_title">SERVICE 02</p>
              <h1 className="service_article_title">エンジニア<br className="break2" />派遣事業</h1>
              <p className="service_info">
                弊社に所属する優秀なエンジニアを派遣します。期間や内容などの詳細はCONTACT（お問い合わせ）よりご相談ください。
              </p>
              <Link to="/contact" className="more_btn_btob">
                CONTACT <img src="/images/arrow2.png" alt="矢印" />
              </Link>
            </div>
            <div className="service_left_img">
              <img src="/images/btob2.jpg" alt="BtoB2" />
            </div>
          </div>
            
          <div className="service_right">
            <div className="service_right_img">
              <img src="/images/btob3.jpg" alt="ABOUT" />
            </div>
            <div className="service_right_contents">
              <p className="service_sub_title">SERVICE 03</p>
              <h1 className="service_article_title">
                デジタルマーケ<br className="break2" />
                ティング<br className="break1" />支援事業
              </h1>
              <p className="service_info">
                リサーチ/競合分析から、コンバージョン/CRMまでデジタルマーケティングのほぼすべての領域を支援します。「最適な場所、最適なタイミングでオーディエンスとつながること」を目指します。
              </p>
              <Link to="/contact" className="more_btn_btob">
                CONTACT <img src="/images/arrow2.png" alt="矢印" />
              </Link>
            </div>
          </div>

          <div className="service_left">
            <div className="service_left_contents">
              <p className="service_sub_title">SERVICE 04</p>
              <h1 className="service_article_title">アプリ開発事業</h1>
              <p className="service_info">
                新規アプリ制作や、WEBサイトからのアプリ展開など、お客様の要望に沿ったアプリ開発を行います。
              </p>
              <Link to="/contact" className="more_btn_btob">
                CONTACT <img src="/images/arrow2.png" alt="矢印" />
              </Link>
            </div>
            <div className="service_left_img">
              <img src="/images/btob4.jpg" alt="BtoB2" />
            </div>
          </div>
        </div>
  );
});