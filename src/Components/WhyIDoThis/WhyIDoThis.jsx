import React from 'react';
import './WhyIDoThis.css';
import checkIcon from '../../Assets/check-icon.png';
import { useTranslation } from 'react-i18next';



const WhyIDoThis = () => {
      const { t, i18n } = useTranslation();
      const lang = i18n.language;
      const benefits = [
        { label: t('benefits.0'), value: 9 },
        { label: t('benefits.1'), value: 8 },
        { label: t('benefits.2'), value: 8 },
        { label: t('benefits.3'), value: 9 },
        { label: t('benefits.4'), value: 7 },
      ];

      const HandleButtonClick = () => {
        window.location.href='/consultancy';
      }
  return (
    <section className="why-section">
    <div className="why-inner">
     
      <div className="why-left">
        <span className="tag">{t('why.tag')}</span>
        <h1>{t('why.heading')}</h1>
        <p className="description">{t('why.description')}</p>
        <ul className="checklist">
          {[0, 1, 2].map(index => (
            <li key={index}>
              <img src={checkIcon} alt="check" />
              {t(`why.list.${index}`)}
            </li>
          ))}
        </ul>
        <button className="more-btn" onClick={HandleButtonClick}>{t('why.button').split('→')[0]} <span>→</span></button>
      </div>

      <div className="why-right">
        <img src={lang === 'en' ?  "./benefitchart.svg" : `./GermanBenefit.svg`} alt="" className='why-right-img'/>
       

      </div>
    </div>
  </section>
  );
};

export default WhyIDoThis;


