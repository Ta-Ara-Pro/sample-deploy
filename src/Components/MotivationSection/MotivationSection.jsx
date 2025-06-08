import React from 'react';
import './MotivationSection.css';
import strategy from '../../Assets/motivation.jpg'
import { useTranslation } from 'react-i18next';

const MotivationSection = () => {
     const { t } = useTranslation();
     const HandleMotiveButton = () => {
      window.location.href = '/about'
     }
  return (
    <section className="motivation-section">
    <div className="motivation-inner">
      <div className="motivation-image">
        <img src={strategy} alt="Motivation" />
      </div>

      <div className="motivation-content">
        <h2>{t('motivation.heading')}</h2>
        <p>
          {t('motivation.paragraph')
            .split('\n')
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </p>
        <button className="motivation-button" onClick={HandleMotiveButton}>{t('motivation.button')}</button>
      </div>
    </div>
  </section>
  );
};

export default MotivationSection;
