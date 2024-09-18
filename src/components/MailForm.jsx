import React from 'react';
import { useState } from 'react';
import '../Style/MailForm.css';
import { init, send } from 'emailjs-com';
// import { init, send } from 'emailjs-com';

function MailForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = () => {
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);

      const template_param = {
        from_email: email,
        to_name: name,
        subject: subject,
        message: message,
      };
      send(serviceID, templateID, template_param).then(() => {
        window.alert('お問い合わせを送信しました。');
        setEmail('');
        setName('');
        setSubject('');
        setMessage('');
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    sendMail();
  };

  const disableSend =
    email === '' || name === '' || subject === '' || message === '';

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="form-container">
        <h2 className="form-title">問い合わせ</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name or Company
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="氏名(会社名)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="form-input"
              placeholder="件名"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows="10"
              className="form-input"
              placeholder="内容"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="form-button"
            onClick={handleClick}
            disabled={disableSend}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default MailForm;
