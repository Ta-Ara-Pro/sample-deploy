import React from 'react';
import { useTranslation } from 'react-i18next';
import './ConsultancyLab.css';


const icons = [
  '/strategyIcon.svg',
  '/presention-chart.svg',
  '/status-up.svg',
  '/trend-up.svg',
  '/cup.svg',
  '/ranking.svg'
];

const ConsultancyLab = () => {
  const { t } = useTranslation();
  const services = t('consultancyLab.services', { returnObjects: true });

  return (
    <div className="gradient-background2" id="consultancy">
      <section className="lab-wrapper">
        <div className="lab-background" />
        <div className="lab-container">
          <header className="lab-header">
            <h1>{t('consultancyLab.title')}</h1>
            <p
              className="subtitle"
              dangerouslySetInnerHTML={{ __html: t('consultancyLab.subtitle') }}
            />
            <p
              className="description2"
              dangerouslySetInnerHTML={{ __html: t('consultancyLab.description') }}
            />
          </header>

          <div className="services-grid">
            {services.map((service, i) => (
              <div className="service-box" key={i}>
                <img src={icons[i]} alt="icon" className="service-icon" />
                <h3>{service.title}</h3>
                <p className="service-sub">{service.subtitle}</p>
                <ul className="service-list">
                  {service.items.map((item, j) => (
                    <li key={j}>
                      <img src='/labTick.svg' alt="tick" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultancyLab;
