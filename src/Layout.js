import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import logo from './Assets/logo.png';
import Eng from './Assets/England.jpg';
import GermanFlag from './Assets/germany.png';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleContactClick = () => {
    navigate('/contact-us');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <header className="topbar">
        <div className="topbar-line">
          <div className="topbar-inner">
            {/* Left: Logo */}
            <div className="logo-section">
              <img src={logo} alt="Logo" className="logo" onClick={handleLogoClick} />
            </div>

            {/* Center: Navigation Links */}
            <nav className="nav">
              <a href="/interim">{t('interim0')}</a>
              <a href="/consultancy">{t('Consulting')}</a>
              <a href="/experience">{t('experience')}</a>
              <a href="/about">{t('about')}</a>
            </nav>

            {/* Right: Contact and Language */}
            <div className="actions">
              <button className="contact-button" onClick={handleContactClick}>
                {t('Contact us')}
              </button>
              <p>DE / EN</p>
              <img
                src={i18n.language === 'en' ? Eng : GermanFlag}
                alt="Language"
                className="flag"
                onClick={toggleLanguage}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
