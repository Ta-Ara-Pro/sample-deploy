import React, { useState, useEffect } from 'react';
import './CookieAlert.css';
import { X } from 'lucide-react';
import CookieModal from '../CookiePolicy/CookieModal';
import { useTranslation } from 'react-i18next';

const CookieAlert = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieAccepted');
    if (!hasAccepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="cookie-banner">
        <div className="cookie-content">
          <img src="/cookie.svg" alt="Cookie" className="cookie-icon" />
          <div className="cookie-text">
            <p>
              {t('cookie.message')} <br />
              <a onClick={() => setShowModal(true)} className="cookie-link">
                {t('cookie.link')}
              </a>
            </p>
          </div>
          <button className="cookie-button" onClick={handleAccept}>
            {t('cookie.agree')}
          </button>
        </div>
        <button className="cookie-close" onClick={handleClose}>
          <X size={20} />
        </button>
      </div>

      {/* Cookie Modal */}
      <CookieModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CookieAlert;
