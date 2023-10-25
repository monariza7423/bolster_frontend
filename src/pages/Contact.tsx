import { FC, memo, useState } from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import '../styles/Contact.scss';
import { ScrollToTopButton } from "../components/button/ScrollToTopButton";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Contact: FC = memo(() => {
  const location = useLocation();
  const formData = location.state || {};
  const [ firstName, setFirstName] = useState(formData.firstName || "");
  const [ lastName, setLastName] = useState(formData.lastName || "");
  const [ firstNameKana, setFirstNameKana] = useState(formData.firstNameKana || "");
  const [ lastNameKana, setLastNameKana] = useState(formData.lastNameKana || "");
  const [ company, setCompany] = useState(formData.company || "");
  const [ email, setEmail] = useState(formData.email || "");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [contactType, setContactType] = useState(formData.contactType || "");
  const [ content, setContent] = useState(formData.content || "");

  const [errorMessages, setErrorMessages] = useState<{
    firstName?: string;
    lastName?: string;
    firstNameKana?: string;
    lastNameKana?: string;
    email?: string;
    emailEmpty?: string;
    emailInvalid?: string;
    confirmEmail?: string;
    contactType?: string;
    content?: string;
  }>({});
  

  const navigate = useNavigate();

  const onChangeFirstName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const onChangeLastName = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const isValidKana = (text: string) => {
    const kanaRegex = /^[ァ-ンヴー・]*$/;
    return kanaRegex.test(text);
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

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let errors: typeof errorMessages = {};

    if (!firstName) errors.firstName = "お名前 姓を入力してください";
    if (!lastName) errors.lastName = "お名前 名を入力してください";
    if (!firstNameKana) {
      errors.firstNameKana = "フリガナ セイを入力してください";
    } else if (!isValidKana(firstNameKana)) {
      errors.firstNameKana = "フリガナ セイはカタカナで入力してください";
    }
    if (!lastNameKana) {
      errors.lastNameKana = "フリガナ メイを入力してください";
    } else if (!isValidKana(lastNameKana)) {
      errors.lastNameKana = "フリガナ メイはカタカナで入力してください";
    }
    if (!email) {
      errors.emailEmpty = "メールアドレスを入力してください";
    } else if (!isValidEmail(email)) {
      errors.emailInvalid = "有効なメールアドレスを入力してください";
    }
    if (email !== confirmEmail) errors.confirmEmail = "メールアドレスが一致していません。";
    if (!contactType) errors.contactType = "お問い合わせ種類が選択されていません。";
    if (!content) errors.content = "お問合せ内容を入力してください";

    if (Object.keys(errors).length) {
      setErrorMessages(errors);
      return;
    }

    if (email !== confirmEmail) {
        alert("メールアドレスが一致していません。");
        return;
    }

    navigate("/contact/form", {
      state: {
        firstName,
        lastName,
        firstNameKana,
        lastNameKana,
        company,
        email,
        contactType,
        content
      }
    });
  };


  return (
    <>
      <Header />
      <div className="top_box_contact">
        <div className="contact_img">
          <span className="page_title_contact">CONTACT</span>
          <img src="/images/Contact.jpg" alt="MEMBER" />
        </div>
      </div>
      <div className="container_contact">
        <div className="contact_contents">
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
            <p className="contact_info_contents_3">終了日:2020年12月18日</p>
            <p className="contact_info_contents_4">リモートスタイルに関してのお問い合わせは下記フォーム「お問い合わせ種類」で「事業（リモートスタイル）について」を選択してお問い合わせください。</p>
          </div>
        </div>

        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <div className="form_item">
              <label className="label">氏名<span className="clr_red">*</span></label>
              <input type="text" value={firstName} onChange={onChangeFirstName} defaultValue={formData.firstName} className="input" placeholder="お名前 姓" />
              <span className="error">{errorMessages.firstName}</span>
              <input type="text" value={lastName} onChange={onChangeLastName} defaultValue={formData.lastName} className="input" placeholder="お名前 名" />
              <span className="error">{errorMessages.lastName}</span>
            </div>
            <div className="form_item">
              <label className="label">氏名(フリガナ)<span className="clr_red">*</span></label>
              <input type="text" value={firstNameKana} onChange={onChangeFirstNameKana} defaultValue={formData.firstNameKana} className="input" placeholder="フリガナ セイ" />
              <span className="error">{errorMessages.firstNameKana}</span>
              <input type="text" value={lastNameKana} onChange={onChangeLastNameKana} defaultValue={formData.lastNameKana} className="input" placeholder="フリガナ メイ" />
              <span className="error">{errorMessages.lastNameKana}</span>
            </div>
            <div className="form_item">
              <label className="label">会社名</label>
              <input type="text" value={company} onChange={onChangeCompany} defaultValue={formData.company} className="input" />
            </div>
            <div className="form_item">
              <label className="label">メールアドレス<span className="clr_red">*</span></label>
              <input type="text" value={email} onChange={onChangeEmail} defaultValue={formData.email} className="input" placeholder="半角で入力してください" />
              {errorMessages.emailEmpty && <span className="error">{errorMessages.emailEmpty}</span>}
              {errorMessages.emailInvalid && <span className="error">{errorMessages.emailInvalid}</span>}
            </div>
            <div className="form_item">
              <label className="label">メールアドレス（確認用）<span className="clr_red">*</span></label>
              <input type="text" value={confirmEmail} onChange={onChangeConfirmEmail} className="input" placeholder="半角で入力してください" />
            </div>
            <div className="form_item">
              <label className="label">お問い合わせ種類</label>
              <div className="select_box">
                <select value={contactType} onChange={onChangeContactType} defaultValue={formData.contactType} className="select">
                  <option value="">選択してください</option>
                  <option value="事業(WEB制作・開発)について">事業(WEB制作・開発)について</option>
                  <option value="事業(オハナスタイル)について">事業(オハナスタイル)について</option>
                  <option value="事業(リモートスタイル)について">事業(リモートスタイル)について</option>
                  <option value="採用について">採用について</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <span className="error">{errorMessages.contactType}</span>
            </div>
            <div className="form_item">
              <label className="label">お問合せ内容<span className="clr_red">*</span></label>
              <textarea value={content} onChange={onChangeContent} defaultValue={formData.content} className="text_area"></textarea>
              <span className="error">{errorMessages.content}</span>
            </div>
            <div className="contact_box">
              <div className="contact_info">
                <h4 className="contact_info_title_2">■個人情報の利用目的について</h4>
                <p className="contact_info_contents_1">
                  本お問い合わせフォームで収集した個人情報は、お問い合わせへの回答のみに利用します。<br />
                  <Link to="/" className="privacy_link">※こちらの個人情報の取り扱いに関する要項</Link>をご確認のうえ、同意いただける場合は「同意して内容を確認する」ボタンを押してください。
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