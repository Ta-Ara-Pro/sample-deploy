import React from 'react';
import './StrategySection.css';
import strategy from '../../Assets/555.png'
import icon1 from '../../Assets/icon1.png';
import icon2 from '../../Assets/icon2.png';
import icon3 from '../../Assets/icon3.png';
import { useTranslation } from 'react-i18next';



const StrategySection = () => {
      const { t } = useTranslation();
      const services = [
        {
          icon: icon1,
          title: t('strategy.services.0.title'),
          description: t('strategy.services.0.description'),
        },
        {
          icon: icon2,
          title: t('strategy.services.1.title'),
          description: t('strategy.services.1.description'),
        },
        {
          icon: icon3,
          title: t('strategy.services.2.title'),
          description: t('strategy.services.2.description'),
        },
      ];
      
  return (
    <section className="strategy-section-1">
      <div className="strategy-inner-1">
        <div className="strategy-content-1">
          <h1>{t('strategy.heading')}</h1>
          <div className="strategy-text-1">
            <p className="intro-str"><strong>{t('strategy.paragraph1')}</strong></p>
            <p className="intro-str">
              {t('strategy.paragraph2_part1')}
              <br />
              <strong>{t('strategy.paragraph2_strong')}</strong> {t('strategy.paragraph2_part2')}
              <br />
              {t('strategy.paragraph2_part3')}
            </p>
          </div>

          <div className="strategy-services-1">
            {services.map((service, index) => (
              <div className="service-item-1" key={index}>
                <div className="service-icon-1">
                  <img src={service.icon} alt="service icon" />
                </div>
                <div className="service-info-1">
                  <h4>{service.title}</h4>
                  <p className="service-info-p">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="strategy-image-1"
          style={{
            backgroundImage: `url('/ringsRight.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundSize: 'auto 92%',
          }}
        >
          <div className="image-container">
            <img src={strategy} alt="Compass" className="strategy-full-image" />
            <span className="strategy-label">{t('strategy.label')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
