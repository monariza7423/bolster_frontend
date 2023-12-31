import { FC, memo } from "react";
import '../../styles/MemberItem.scss';

type MemberItemProps = {
  imageUrl: string;
  role: string | JSX.Element;
  englishName: string;
  japaneseName: string;
  hobby: string;
  skill: string;
}

export const MemberItem: FC<MemberItemProps> = memo(({
  imageUrl,
  role,
  englishName,
  japaneseName,
  hobby,
  skill,
}) => {
  
  return (
    <div className="member_item">
      <img src={imageUrl} alt={englishName} />
      <div className="text_container">
        <div className="role">{role}</div>
        <div className="member_list_name">
          <div className="english_name">{englishName}</div>
          <div className="japanese_name">{japaneseName}</div>
        </div>
        <div className="hobby">趣味: {hobby}</div>
        <div className="skill">特技: {skill}</div>
      </div>
    </div>
  );
});