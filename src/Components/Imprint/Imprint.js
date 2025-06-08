import React from 'react';
import './Imprint.css';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Imprint = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="imprint-modal-overlay">
      <div className="imprint-modal">
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="modal-body">
          <h2 className="modal-title">{t('Imprint.title')}</h2>
          <p className="modal-subtitle">{t('Imprint.description1')}</p>
         <p className="modal-subtitle">{t('Imprint.description2')}</p>
         <p className="modal-subtitle">{t('Imprint.description3')}</p>
<br/>

          <h3 className="modal-subtitle">{t('Imprint.phone')}</h3>
           <h3 className="modal-subtitle">{t('Imprint.landline')}</h3>
            <h3 className="modal-subtitle">{t('Imprint.Email')}</h3>

            <h2 className="modal-title">{t('Imprint.address')}</h2>
            <h3 className="modal-subtitle">{t('Imprint.addressDescription')}</h3>
            <h3 className="modal-subtitle">{t('Imprint.addressDescription2')}</h3>
            <h3 className="modal-subtitle">{t('Imprint.addressDescription3')}</h3>
         <br/>
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <p className="modal-description2">{t('Imprint.owner')}</p>
            <p className="modal-description2">{t('Imprint.owner2')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <p className="modal-description2">{t('Imprint.company')}</p>
            <p className="modal-description2">{t('Imprint.company2')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <p className="modal-description2">{t('Imprint.court')}</p>
            <p className="modal-description2">{t('Imprint.court2')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <p className="modal-description2">{t('Imprint.vat')}</p>
            <p className="modal-description2">{t('Imprint.vat2')}</p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Imprint;
