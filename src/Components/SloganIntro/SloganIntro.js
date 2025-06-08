import React, { useEffect, useState } from 'react';
import './SloganIntro.css';
import subtract from '../../Assets/Subtract.png';
import { useTranslation } from 'react-i18next';

const SloganIntro = ({ onFinish, exiting }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!exiting) {
      const timer = setTimeout(onFinish, 4800);
      return () => clearTimeout(timer);
    }
  }, [onFinish, exiting]);

  useEffect(() => {
    if (exiting) {
      // After exit animation duration (say 1s), call onFinish to unmount intro
      const timer = setTimeout(() => {
        onFinish();
      }, 1000); // match with slide down animation duration in CSS

      return () => clearTimeout(timer);
    }
  }, [exiting, onFinish]);

  return (
    <div className={`intro-container ${exiting ? 'slideDownOut' : ''}`}>
      <div className="circle-wrapper">
        <svg className="circle" viewBox="0 0 100 100">
          <circle
            className="progress-ring"
            cx="50"
            cy="50"
            r="45"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <img src="./Arrowblue.svg" alt="Subtract" className="intro-image" />
        <div className="slogan-words">
          <span className="word word1">{t('signpost')}</span>
          <span className="word word2">{t('for')}</span>
          <span className="word word3">{t('growth')}</span>
        </div>
      </div>
    </div>
  );
};

export default SloganIntro;
