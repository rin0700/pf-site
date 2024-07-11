import React from 'react'
import '../Style/MailForm.css'

function MailForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="form-container">
        <h2 className="form-title">Send a Mail</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              className="form-input"
              placeholder="Subject"
              required
            />
          </div>
  );
}

export default MailForm