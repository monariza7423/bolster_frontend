import { FC, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import '../styles/ContactConfirm.scss';
import axios from "axios";
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";

export const ContactConfirm: FC = memo(() => {
  const location = useLocation();
  const formData = location.state;
  const navigate = useNavigate();
  const goBackToInputPage = () => {
    navigate('/contact', { state: formData});
  }

  const baseURL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000";
  const sendDataToBackend = async () => {
    try {
      const response = await axios.post(`${baseURL}/api/contact`, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        first_name_kana: formData.firstNameKana,
        last_name_kana: formData.lastNameKana,
        company: formData.company,
        email: formData.email,
        contact_type: formData.contactType,
        content: formData.content
      });

      if (response.status === 200 || response.status === 201) {
        navigate("/contact/complete");
      } else {
        alert("送信失敗しました");
      }
    }catch (error) {
      console.log('問題');
      alert("問題が発生しました");
    }
  }

  return (
    <>
      <Header />
      <div className="top_box_contactform">
        <div className="contactform_img">
          <span className="page_title_contactform">CONTACT</span>
          <img src="/images/Contact.jpg" alt="MEMBER" />
        </div>
      </div>
      <div className="container_contactform">
        <div className="contactform_contents">
          <p className="phrase">
            下記の必要項目を確認して送信してください。<br />
            1 週間以内に、担当者より折り返しご連絡致します。<br />
          </p>
        </div>
        <div className="contact_form">
          <form onSubmit={(e) => {
            e.preventDefault();
            sendDataToBackend();
          }}>
            <div className="form_item">
              <label className="label">氏名</label>
              <input type="text" value={formData.firstName} readOnly className="input" />
              <input type="text" value={formData.lastName} readOnly className="input" />
            </div>
            <div className="form_item">
              <label className="label">氏名(ふりがな)</label>
              <input type="text" value={formData.firstNameKana} readOnly className="input" />
              <input type="text" value={formData.lastNameKana} readOnly className="input" />
            </div>
            <div className="form_item">
              <label className="label">会社名</label>
              <input type="text" value={formData.company} readOnly className="input" />
            </div>
            <div className="form_item">
              <label className="label">メールアドレス</label>
              <input type="text" value={formData.email} readOnly className="input" />
            </div>
            <div className="form_item">
              <label className="label">お問い合わせ種類</label>
              <input type="text" value={formData.contactType} readOnly className="input" />
            </div>
            <div className="form_item">
              <label className="label">お問合せ内容</label>
              <textarea value={formData.content} readOnly className="text_area"></textarea>
            </div>
            <div className="contactform_box">
              <div className="contactform_info">
                <h4 className="contactform_info_title_2">■個人情報の利用目的について</h4>
                <p className="contactform_info_contents_1">
                  本お問い合わせフォームで収集した個人情報は、お問い合わせへの回答のみに利用します。<br />
                  <Link to="/" className="privacy_link">※こちらの個人情報の取り扱いに関する要項</Link>をご確認のうえ、同意いただける場合は「同意して内容を確認する」ボタンを押してください。
                </p>
              </div>
            </div>
            <div className="submit_btn_form">
              <button type="submit">送信 <img src="/images/arrow2.png" alt="矢印" /></button>
              <button type="button" onClick={goBackToInputPage}>
                  入力ページに戻る <img src="/images/arrow2.png" alt="矢印" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="top_btn">
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
})