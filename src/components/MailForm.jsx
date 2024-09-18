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
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="form-container">
        <h2 className="form-title">Send a Mail</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="you@example.com"
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
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="form-input"
              placeholder="Your message"
              required
            />
          </div>
          <button type="submit" className="form-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default MailForm;
