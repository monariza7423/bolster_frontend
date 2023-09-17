import { FC, memo } from "react";
import '../../styles/MemberListItem.scss';
import { MemberItem } from "./MemberItem";

export const MemberListItem: FC = memo(() => {
  
  return (
    <div className="member_list">
      <MemberItem
        imageUrl="/images/Yukari Tokuda.jpg"
        role="WEBデザイナー"
        englishName="Yukari Tokuda"
        japaneseName="徳田有加里"
        hobby="バスケ・ショッピング"
        skill="料理" />
      
      <MemberItem
        imageUrl="/images/Dai Kasahara.jpg"
        role="WEBプランナー"
        englishName="Dai Kasahara"
        japaneseName="笠原大"
        hobby="ボウリングの動画制作"
        skill="ボウリング" />
      
      <MemberItem
        imageUrl="/images/Kazuki Honma.jpg"
        role={<span>運用型WEB広告<br />エグゼクティブ</span>}
        englishName="Kazuki Honma"
        japaneseName="本間和貴"
        hobby="海外旅行"
        skill="バスケットボール" />

      <MemberItem
        imageUrl="/images/Haruka Endo.jpg"
        role="WEBディレクター"
        englishName="Haruka Endo"
        japaneseName="遠藤悠"
        hobby="趣味探し"
        skill="フットワークの軽さ" />

      <MemberItem
        imageUrl="/images/Takashi Abe.jpg"
        role="技術開発部"
        englishName="Takashi Abe"
        japaneseName="阿部高志"
        hobby="小説を書くこと"
        skill="物事に集中して取り組めること" />
    </div>
  );
});