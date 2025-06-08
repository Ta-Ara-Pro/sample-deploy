import React from 'react';
import { useTranslation } from 'react-i18next';
import './BrandNavigator.css';

import infoIcon from '../../Assets/newicon.png'; 
import brandDiagram from '../../Assets/human.png'; 
import strategyCircle from '../../Assets/boss.png';

const BrandNavigator = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // Append query string to force reload when language changes
  const humanImage = i18n.language === 'de' 
    ? `/humanDE.svg?lang=${i18n.language}` 
    : `/humanEN.svg?lang=${i18n.language}`;
  
  return (
    <div className="brand-navigator-container" id="brand-nav">
      {/* Section 1: Brand Navigator */}
      <section className="navigator-section">
        <h2 className="navigator-title">{t('brandNavigator.title')}</h2>
        <img src='/infoicon.svg' alt="info" className="info-icon-3" />
        <p className="navigator-desc">{t('brandNavigator.description')}</p>
        <img src={lang === 'en' ? "./humanEN.svg" : './humanDE.svg'} alt="Brand Diagram" className="brand-diagram" />
      </section>

      {/* Section 2: Corporate Strategy */}
      <section className="navigator-section">
        <h2 className="navigator-title">{t('brandNavigator.corporateTitle')}</h2>
        <img src='/core-icon.svg' alt="info" className="info-icon-3" />
        <p className="navigator-desc">{t('brandNavigator.corporateDescription')}</p>
        <img src="./stcircle.svg" alt="Strategy Circle" className="brand-diagram" />
      </section>
    </div>
  );
};

export default BrandNavigator;
