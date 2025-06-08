import React, { useRef, useState } from 'react';
import './ContactSection.css';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bz25hrr',
        'template_2vopwya', 
        formRef.current,
        'u94Iits4ojE6Ous6A' 
      )
      .then(
        () => {
          setStatusMessage(t('message_sent_success'));
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatusMessage(t('message_sent_error'));
        }
      );
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">{t('contact_title')}</h2>
      <div className="contact-box">
        <div className="contact-form">
          <h3>{t('drop_message')}</h3>
          <p>{t('response_note')}</p>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="user_name" placeholder={t('full_name')} required />
              <input type="text" name="company" placeholder={t('company_name')} />
            </div>
            <input type="email" name="user_email" placeholder={t('work_email')} required />
            <input type="text" name="subject" placeholder={t('subject')} required />
            <textarea name="message" rows="4" placeholder={t('message')} required />
            <button type="submit">{t('send')}</button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>

        <div className="contact-info">
          <div className="info-item">
            <img src='/phone.svg' alt="phone icon" />
            <div>
              <p className="info-bold">+43 664 3810344</p>
              <p className="info-detail">{t('phone_label')}</p>
            </div>
          </div>
          <div className="info-item">
            <img src='/mail1.svg' alt="email icon" />
            <div>
              <p className="info-bold">office@thebrandnavigation.com</p>
              <p className="info-detail">{t('email_label')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
