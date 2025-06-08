import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../Components/Interim/Interim.css';
import strategy from '../../Assets/whywork.png';
import flag from '../../Assets/grow.png';
import BlackTick from '../../Assets/blackTick.png';

const WhyWork = () => {
  const { t } = useTranslation();

  const renderMultilineText = (text) =>
    text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <section className="why-work" id="why-work">
      <div className="interim-container">
        <div className="interim-image">
          <img src={strategy} alt={t('WhyWork.title')} />
        </div>

        <div className="interim-text-work">
          <div className="interim-title">
            <h2>{renderMultilineText(t('WhyWork.title'))}</h2>
            <img src='./grow.svg' alt={t('WhyWork.title')} />
          </div>

          <p>
            <strong>{t('WhyWork.subtitleStrong1')}</strong>
          </p>

          <p className="intro">{t('WhyWork.intro1')}</p>

          <p>
            <strong>{t('WhyWork.subtitleStrong2')}</strong>
          </p>

          <div className="interim-points-work">
            {[1, 2, 3, 4, 5].map((num) => (
              <div className="point" key={num}>
                <img src="/blacktick.svg" alt="tick icon" />
                <p>{t(`WhyWork.points.point${num}`)}</p>
              </div>
            ))}
          </div>

          <p className="intro">{renderMultilineText(t('WhyWork.intro2'))}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
