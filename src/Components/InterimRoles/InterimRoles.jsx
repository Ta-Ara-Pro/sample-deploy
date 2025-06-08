import React from 'react';
import { useTranslation } from 'react-i18next';
import './InterimRoles.css';
import greenTick from '../../Assets/greenTick.png';
import blueTick from '../../Assets/blueTick.png';
import paperPlane from '../../Assets/paperplane.png';

const interimData = [
  { role: 'CMO', color: '#7CCFB3', tick: "/greentick.svg" },
  { role: 'CBO', color: '#418FDE', tick: "/bluetick.svg" }
];

const InterimRoles = () => {
  const { t } = useTranslation();

  const getDeliverables = (role) => {
     if (role === 'CMO') {
    const cmoTitles = t('InterimRoles.deliverablesCMO_titles', { returnObjects: true });
    const cmoDescriptions = t('InterimRoles.deliverablesCMO', { returnObjects: true });

    return Object.entries(cmoDescriptions).map(([key, description]) => ({
      title: cmoTitles[key] || key,
      description
    }));
    } else {
      // For other roles (like CBO), map from deliverables0 and deliverables keys
      const deliverables0 = t('InterimRoles.deliverables0', { returnObjects: true }) || {};
      return Object.keys(deliverables0).map(key => {
        const title = deliverables0[key];
        return {
          title,                                  // translated title string from deliverables0
          description: t(`InterimRoles.deliverables.${title}`) // description from deliverables
        };
      });
    }
  };

  const cboMetrics = Object.entries(t('InterimRoles.cboMetrics', { returnObjects: true })).map(
    ([key, title]) => ({
      title,
      description: t(`InterimRoles.metrics.${title}`)
    })
  );

  const HandleTalkButton = () => {
    window.location.href = '/contact-us'
  }

  return (
    <>
      <div className="interim-container" id="cmo-cbo">
        {interimData.map(({ role, color, tick }) => {
          const deliverables = getDeliverables(role);
          return (
            <div className="interim-column0" key={role}>
              <h2>
                {t("InterimRoles.titlePrefix")} <span style={{ color }}>{role}?</span>
              </h2>
              <p className="interim-desc">{t(`InterimRoles.roles.${role}`)}</p>

              <div className="interim-column">
                <div className="deliver-section">
                  <h3>{t('InterimRoles.deliverTitle', { role })}</h3>
                  <ul>
                    {deliverables.map(({ title, description }, i) => (
                      <li key={i}>
                        <img src={tick} alt="tick" />
                        <div>
                          <strong>{title}</strong>
                          <p>{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
        <img
          src="/interim-navi.svg"
          alt="navi"
          style={{ position: 'absolute', right: '7rem', bottom: '-18%', width: '15%' }}
        />
      </div>

      {/* 30/60/90 Plan */}
      <div className="plan-wrapper">
        <h2 className="plan-title">
          {t('InterimRoles.planTitle')}<span className="blue-text"> CBO </span>
        </h2>
        <p className="plan-subtitle">{t('InterimRoles.planSubtitle')}</p>

        <div className="plan-circles">
          {['foundation', 'strategy', 'activation'].map((step, i) => (
            <div key={step} className={`circle-block${i}`}>
              <img src={require(`../../Assets/${(i + 1) * 30}.png`)} alt={step} className="circle-number" />
              <h4>{t(`InterimRoles.plan.${step}Title`)}</h4>
              <p>{t(`InterimRoles.plan.${step}Desc`)}</p>
            </div>
          ))}
          <img
            src="/interimFullRings.svg"
            alt="rings"
            style={{ position: 'absolute', left: '7%', bottom: '-10%', width: '30%', zIndex: 0 }}
          />
        </div>
        <button className='interim-roles-button' onClick={HandleTalkButton}>{t("Let's talk more →")}</button>
        <img src={paperPlane} alt="plane" className="plane-icon" />
        

        {/* Metrics Section */}
        <div className="metrics-section">
          <h3 className="metrics-title">{t('InterimRoles.metricsTitle')}</h3>
          <p className="metrics-des">
            {t('InterimRoles.metricsSubtitle').split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
          </p>

          <div className="metrics-box">
            <h4>{t('InterimRoles.metricsTitle')}</h4>
            <ul>
              {cboMetrics.map(({ title, description }, i) => (
                <li key={i}>
                  <img src='/bluetick.svg' alt="tick" />
                  <div>
                    <strong className="title-metric">{title}</strong>
                    <p className="des-metric">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="metrics-note">{t('InterimRoles.metricsNote')}</p>
          </div>

          <img
            src="/navi.svg"
            alt="navi"
            style={{ position: 'absolute', right: '27%', top: '-20%', width: '5%', zIndex: 5 }}
          />
          <img
            src="/interimFullRings.svg"
            alt="rings"
            style={{ position: 'absolute', right: '15%', bottom: '0%', opacity: 0.6, width: '48%', zIndex: 0 }}
          />
        </div>

        {/* Comparison */}
        <div className="comparison-wrapper" id="vs-section">
          <h3 className="metrics-title">{t('InterimRoles.comparisonTitle')}</h3>
          <p className="metrics-des">
            {t('InterimRoles.comparisonSubtitle').split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
          </p>

          <div className="comparison-section">
            {['CMO', 'CBO'].map((role, i) => (
              <div className="interim-column-vs" key={i}>
                <div className="comparison-item">
                  <h2>Interim {role}:</h2>
                  <div className="desc-with-icon">
                    <img src={role === 'CMO' ? '/greentick.svg' : '/bluetick.svg'} alt="tick" className="comparison-tick" />
                    <p className="interim-desc">{t(`InterimRoles.comparison.Interim ${role}`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InterimRoles;
