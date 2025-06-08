import React from 'react';
import { useTranslation } from 'react-i18next';
import './TopTrends.css';
import bgImage from '../../Assets/trends-bg.png';

const TopTrends = () => {
  const { t } = useTranslation();

  const leftTrends = t('topTrends.leftTrends', { returnObjects: true });
  const rightTrends = t('topTrends.rightTrends', { returnObjects: true });
 
  return (
    <section className="trends-wrapper" id="trends">
      <div className="trends-background" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="trends-container">
        <div className="trends-left">
          <div className="trends-header">
            <img src='/icon-trends.svg' alt="icon" style={{width:"40px", height:"40px"}} />
            <h2 dangerouslySetInnerHTML={{ __html: t('topTrends.title') }} />
            <p className="trends-intro">{t('topTrends.intro')}</p>
          </div>
          <ul className="trend-list">
            {leftTrends.map((item, i) => (
              <li key={i}>
                <img src='/tick-top.svg' alt="tick" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="trend-list right-trend-list">
          {rightTrends.map((item, i) => (
            <li key={i}>
              <img src='/tick-top.svg' alt="tick" />
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopTrends;
