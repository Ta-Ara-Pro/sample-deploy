import React from 'react';
import { useTranslation } from 'react-i18next';
import './Collaborative.css';

import missionIcon from '../../Assets/mission.png';
import visionIcon from '../../Assets/vision.png';
import valuesIcon from '../../Assets/values.png';
import backgroundImage from '../../Assets/group3.png';

const Collaborative = () => {
  const { t } = useTranslation('');

  const principles = [
    {
      icon: missionIcon,
      label: t('pillar_heading_one'),
      description: t('pillar_text_one'),
    },
    {
      icon: visionIcon,
      label: t('pillar_heading_two'),
      description: t('pillar_text_two'),
    },
    {
      icon: valuesIcon,
      label: t('pillar_heading_three'),
      description:
        'Agility – Change is the norm; adaptability is key. Foresight – I connect strategy with cultural and tech shifts. Clarity – Clear positioning and a distinct voice matter. Partnership – I work collaboratively, with trust and shared purpose. Strategy is a horizon, not a fixed route.',
    },
  ];

  return (
    <div className="gradient-background" id="collaborative">
      {/* Decorative background image */}
      <img
        src='/back.svg'
        alt="background"
        className="decorative-bg"
        style={{
          width: '30%',
          height: '70%',
          position: 'absolute',
          top: '20%',
          right: '0px',
          bottom:'0px',
          overflow:'hidden'
        }}
      />

      {/* Leadership Section */}
      <section className="collaboration-section">
        <div className="collaboration-container">
          <div className="collaboration-text">
            <div className="collaboration-title">
              <h2>{t('leadership_main')}</h2>
            </div>

            <div className="collaboration-points">
              <div className="point2">
                <p>{t('leadership_description')}</p>
              </div>
              <div className="point2">
                <p><strong>{t('point_title_one')}</strong></p>
              </div>
              <div className="point2">
                <p>{t('point_body_one')}</p>
              </div>
              <div className="point2">
                <p><strong>{t('point_title_two')}</strong></p>
              </div>
              <div className="point2">
                <p>{t('point_body_two')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="collaborative-section">
        <div className="collaborative-inner">
          <div className="collaborative-grid">
            {principles.map((item, index) => (
  <div className="service2-card" key={index}>
    <img src={item.icon} alt="icon" className="service2-icon" />
    <h4>{item.label}</h4>
    {index === 2 ? (
      <p className="custom-description">
        <span className="highlight">{t('ServiceCards.card2.items.agility')} –</span> {t('ServiceCards.card2.description.agility')}<br />
        <span className="highlight">{t('ServiceCards.card2.items.foresight')} – </span>{t('ServiceCards.card2.description.foresight')} <br />
        <span className="highlight">{t('ServiceCards.card2.items.clarity')} – </span>{t('ServiceCards.card2.description.clarity')}<br />
        <span className="highlight">{t('ServiceCards.card2.items.partnership')} –</span> {t('ServiceCards.card2.description.partnership')}<br />
        <strong>{t('ServiceCards.card2.description.conclusion')}</strong>
      </p>
    ) : (
      <p>{item.description}</p>
    )}
  </div>
))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Collaborative;
