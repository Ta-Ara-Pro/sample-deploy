import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../Assets/logo.png';
import linkedin from '../../Assets/linkedin.png';
import  { useState, useEffect } from 'react';
import Imprint from '../Imprint/Imprint'


const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogoClick = (targetId) => {
    navigate(`${targetId}`);
  };

  const HandleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/norbert-schrofner/', '_blank');

  }
  const handleConsultingClick = () => {
    window.location.href = '/consultancy'
  }

  return (
    <>
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo-img" />
          <p className="footer-description">
            {t('footer.description')
              .split('\n')
              .map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <p className="footer-title">{t('footer.mainPages')}</p>
            <ul>
              <li onClick={() => handleLogoClick('/#home-hero')}>{t('footer.nav.home')}</li>
              
              <li onClick={() => handleLogoClick('/interim#Interim-hero')}>
                {t('footer.nav.interim')
                  .split('\n')
                  .map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </li>
              <li onClick={ handleConsultingClick}>
                {t('footer.nav.consulting')}
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-title">{t('footer.pages')}</p>
            <ul>
              <li onClick={() => handleLogoClick('/experience#Exp-hero')}>
                <a href="/experience">{t('footer.nav.experience')}</a>
              </li>
              <li onClick={() => handleLogoClick('/about#About-hero')}>{t('footer.nav.about')}</li>
              <li onClick={() => handleLogoClick('/contact-us/#Contact-hero')}>{t('footer.nav.contact')}</li>
              <li onClick={() => setShowModal(true)}>{t('footer.nav.imprint')}</li>
              
              
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">{t('footer.copyright')}</p>
        <div className="social-icons">
          {/* <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a> */}
          <a href="#">
            <img src={linkedin} onClick={HandleLinkedInClick} alt="linkedin" style={{ width: '40px' }} />
          </a>
        </div>
      </div>
    </footer>
    <Imprint isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Footer;
