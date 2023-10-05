import { FC, memo } from "react";
import '../../styles/BtoCSection.scss';
import { Link } from "react-router-dom";

type BtoCSectionProps = {
  className?: string;
}

export const BtoCSection: FC<BtoCSectionProps> = memo(({className}) => {
  return (
    <div className={`section ${className}`}>
      <div className="btoc">
        <div className="btoc_contents">
          <p className="btoc_sub_title">SERVICE 01</p>
          <h1 className="btoc_article_title">KiKYU</h1>
          <p className="btoc_info">
            人々の「毎日を応援し合うSNS」です。<br />
            毎日のちょっとした目標から、将来の大きな夢まで、毎日をポジティブに。
          </p>
          <a href="https://kikyu.ohana-style.jp/lp" className="btoc_btn">
            GO SITE <img src="/images/arrow2.png" alt="矢印" />
          </a>
        </div>
        <div className="btoc_img">
        </div>
      </div>
    </div>
  );
});