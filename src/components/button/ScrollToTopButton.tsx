import { FC, memo } from "react";
import '../../styles/ScrollToTopButton.scss';

export const ScrollToTopButton: FC = memo(() => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="scroll_btn">
      <img src="/images/top.png" alt="上へ" />
    </button>
  );
});