import { FC, memo, useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import '../styles/Service.scss';
import { BtoBSection } from "../components/section/BtoBSection";
import { BtoCSection } from "../components/section/BtoCSection";

export const Service: FC = memo(() => {
  const [ activeSection, setActiveSection] = useState('BtoB');


  return (
    <>
      <Header />
      <div className="top_box">
        <div className="service_img">
          <span className="page_title">SERVICE</span>
          <img src="/images/service.jpg" alt="SERVICE" />
        </div>
      </div>
      <div className="container_service">
        <div className="service_contents">
          <p className="phrase">
            BOLSTERは「世の中の1人でも多くの人をHAPPYに。」する事業は何でも行います。<br />
            企業を支えるBtoB事業、人を元気づけるBtoC事業、地方創生及び社会課題解決に向けたEC事業など、幅広い事業を行っています。
          </p>
        </div>

        <div className="button_container">
          <button
            className={activeSection === 'BtoB' ? 'button active' : 'button'}
            onClick={() => setActiveSection('BtoB')}
          >
            BtoB事業
          </button>
          <button
            className={activeSection === 'BtoC' ? 'button active' : 'button'}
            onClick={() => setActiveSection('BtoC')}
          >
            BtoC事業
          </button>
        </div>
      </div>

        <div className="section_part">
          {activeSection === 'BtoB' && <BtoBSection className="section_active" />}
          {activeSection === 'BtoC' && <BtoCSection className="section_active" />}
        </div>
      <div className="top_btn">
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
});