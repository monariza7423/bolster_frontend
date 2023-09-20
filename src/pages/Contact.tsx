import { FC, memo, useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import '../styles/Contact.scss';
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import axios from "axios";

export const Contact: FC = memo(() => {
  const [ firstName, setFirstName] = useState("");
  const [ lastName, setLastName] = useState("");
  const [ firstNameKana, setFirstNameKana] = useState("");
  const [ lastNameKana, setLastNameKana] = useState("");
  const [ company, setCompany] = useState("");
  const [ email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [contactType, setContactType] = useState("");
  const [ content, setContent] = useState("");

  const onChangeFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const onChangeLastName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const onChangeFirstNameKana = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameKana(e.target.value);
  }

  const onChangeLastNameKana = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLastNameKana(e.target.value);
  }

  const onChangeCompany = (e:React.ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value);
  }

  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onChangeConfirmEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmEmail(e.target.value);
  }

  const onChangeContactType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContactType(e.target.value);
  }

  const onChangeContent = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== confirmEmail) {
        alert("メールアドレスが一致していません。");
        return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/contact", {
        first_name: firstName,
        last_name: lastName,
        first_name_kana: firstNameKana,
        last_name_kana: lastNameKana,
        company: company,
        email: email,
        contact_type: contactType,
        content: content
      });

      if (response.status === 200) {
        alert("送信成功しました");
      } else {
        alert("送信失敗しました");
      }
    }catch (error) {
      alert("問題が発生しました");
    }
  };


  return (
    <>
      <Header />
      <div className="top_box">
        <div className="contact_img">
          <span className="page_title">CONTACT</span>
          <img src="/images/Contact.jpg" alt="MEMBER" />
        </div>
      </div>
      <div className="container_contact">
        <div className="contact_contact">
          <p className="phrase">
            下記の必要項目を入力して送信してください。<br />
            1 週間以内に、担当者より折り返しご連絡致します。<br />
            * の項目は必須項目です。
          </p>
        </div>
        <div className="contact_box">
          <div className="contact_info">
            <h4 className="contact_info_title">リモートスタイル終了のお知らせ</h4>
            <p className="contact_info_contents_1">リモートスタイルを長らくご愛顧いただきまして、誠にありがとうございました。</p>
            <p className="contact_info_contents_2">2020年4月、在宅で過ごす皆様のHAPPYを少しでも実現する為に、コロナ禍で立ち上げたリモートスタイルも一定の役割を果たした為、以下の日程でサービスを終了致しました。</p>
            <p className="contact_info_contents_3">終了日:2020年12月18</p>
            <p className="contact_info_contents_4">リモートスタイルに関してのお問い合わせは下記フォーム「お問い合わせ種類」で「事業（リモートスタイル）について」を選択してお問い合わせください。</p>
          </div>
        </div>

        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <div className="form_item">
              <label className="label">氏名*</label>
              <input type="text" value={firstName} onChange={onChangeFirstName} className="input" placeholder="お名前 姓" />
              <input type="text" value={lastName} onChange={onChangeLastName} className="input" placeholder="お名前 名" />
            </div>
            <div className="form_item">
              <label className="label">氏名(ふりがな)*</label>
              <input type="text" value={firstNameKana} onChange={onChangeFirstNameKana} className="input" placeholder="フリガナ セイ" />
              <input type="text" value={lastNameKana} onChange={onChangeLastNameKana} className="input" placeholder="フリガナ メイ" />
            </div>
            <div className="form_item">
              <label className="label">会社名</label>
              <input type="text" value={company} onChange={onChangeCompany} className="input" />
            </div>
            <div className="form_item">
              <label className="label">メールアドレス*</label>
              <input type="text" value={email} onChange={onChangeEmail} className="input" placeholder="半角で入力してください" />
            </div>
            <div className="form_item">
              <label className="label">メールアドレス（確認用）*</label>
              <input type="text" value={confirmEmail} onChange={onChangeConfirmEmail} className="input" placeholder="半角で入力してください" />
            </div>
            <div className="form_item">
              <label className="label">お問い合わせ種類</label>
              <select value={contactType} onChange={onChangeContactType} className="input">
                <option value="">選択してください</option>
                <option value="事業(WEB制作・開発)について">事業(WEB制作・開発)について</option>
                <option value="事業(オハナスタイル)について">事業(オハナスタイル)について</option>
                <option value="事業(リモートスタイル)について">事業(リモートスタイル)について</option>
                <option value="採用について">採用について</option>
                <option value="その他">その他</option>
              </select>
            </div>
            <div className="form_item">
              <label className="label">お問合せ内容*</label>
              <textarea value={content} onChange={onChangeContent} className="text_area"></textarea>
            </div>
            <div className="contact_box">
              <div className="contact_info">
                <h4 className="contact_info_title_2">■個人情報の利用目的について</h4>
                <p className="contact_info_contents_1">
                  本お問い合わせフォームで収集した個人情報は、お問い合わせへの回答のみに利用します。<br />
                  ※こちらの個人情報の取り扱いに関する要項をご確認のうえ、同意いただける場合は「同意して内容を確認する」ボタンを押してください。
                </p>
              </div>
            </div>
            <div className="submit_btn">
              <button type="submit">同意して内容を確認する <img src="/images/arrow2.png" alt="矢印" /></button>
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
});