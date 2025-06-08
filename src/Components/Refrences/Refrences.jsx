import React from 'react';
import './Refrences.css';
import { useTranslation } from 'react-i18next';

import henkel from '../../Assets/henkel.png';
import i18n from '../../i18n';

const brandLogos = [
  '/logo1.svg',
  '/audi.svg',
  '/bugatti.svg',
  '/henkel.svg',
  '/freix.svg',
  '/heinken.svg',
  '/gosser.svg'
];

const Refrences = () => {
  const { t } = useTranslation('');

  return (
    <section className="brands-section" id="reference">
      <h2 className="brands-title">{t('headline_label')}</h2>
      {
        i18n.language !== 'en' && <h2 className="brands-subtitle">{t('headline_sub')}</h2>
      }

      <div className="brands-logos">
        {brandLogos.map((logo, index) => (
          <React.Fragment key={index}>
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="brand-logo"
              style={{
                width: index === 3 ? '75px' : undefined,
                height: index === 3 ? '35px' : undefined
              }}
            />
            {index === 3 && <div className="logo-divider" />}
          </React.Fragment>
        ))}
      </div>

      <p className="brands-description">{t('caption_text')}</p>
    </section>
  );
};

export default Refrences;
