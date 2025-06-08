import React from 'react';
import { useTranslation } from 'react-i18next';
import './TargetGroups.css';

import startupIcon from '../../Assets/start-up.png';
import scaleupsIcon from '../../Assets/scale-ups.png';
import establishedIcon from '../../Assets/established.png';
import checkIcon from '../../Assets/check.png';

const TargetGroups = () => {
  const { t } = useTranslation('');

  const groups = [
    {
      key: 'startup',
      icon: '/building.svg'
    },
    {
      key: 'scaleups',
      icon: '/scale-up.svg'
    },
    {
      key: 'established',
      icon: './established.svg'
    }
  ];

  const HandleTargetClick = () => {
    window.location.href = '/contact-us';
  }

  return (
    <section className="target-section" id="target">
      <div className="target-header">
        <h2>{t('sectionTitle')}</h2>
        <p>{t('sectionSubtitle')}</p>
      </div>

      <div className="target-cards">
        {groups.map(({ key, icon }) => (
          <div className="target-card" key={key}>
            <div className="card-header">
              <img src={icon} alt={`${t(`${key}.title`)} icon`} />
              <div>
                <h3>{t(`${key}.offerTitle`)}</h3>
                <h3><strong>{t(`${key}.title`)}</strong></h3>
                <p>{t(`${key}.subtitle`)}</p>
              </div>
            </div>
            <hr style={{
              display: 'flex',
              alignSelf: 'center',
              width: '115%',
              border: 'none',
              borderTop: '1px solid #D8D8D8',
              marginTop: '0.9rem',
              marginBottom: '1.5rem'
            }} />
            <ul className="card-list">
              {t(`${key}.points`, { returnObjects: true }).map((point, i) => (
                <li key={i}>
                  <img src='./greenTick2.svg' alt="check" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="card-footer">
              <p><strong>{t(`${key}.footer`)}</strong><br />{t(`${key}.footerExp`)}</p>
              <button onClick={HandleTargetClick}>{t(`${key}.button`)}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetGroups;
