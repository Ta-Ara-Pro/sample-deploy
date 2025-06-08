import React from 'react';
import './CookieModal.css';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CookieModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="cookie-modal-overlay">
      <div className="cookie-modal">
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="modal-body">
          <h2 className="modal-title">{t('cookieModal.title')}</h2>
          <p className="modal-description">{t('cookieModal.description1')}</p>

          <h2 className="modal-title">{t('cookieModal.usedTitle')}</h2>

          <h3 className="modal-subtitle">{t('cookieModal.strictTitle')}</h3>
          <p className="modal-description">{t('cookieModal.strictDescription')}</p>

          <h3 className="modal-subtitle">{t('cookieModal.optionalTitle')}</h3>
          <p className="modal-description">{t('cookieModal.optionalDescription')}</p>

          <h3 className="modal-subtitle">{t('cookieModal.durationTitle')}</h3>
          <p className="modal-description">{t('cookieModal.durationDescription')}</p>

          <h3 className="modal-subtitle">{t('cookieModal.optOutTitle')}</h3>
          <p className="modal-description">{t('cookieModal.optOutDescription')}</p>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
