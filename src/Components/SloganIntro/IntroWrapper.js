import React, { useState, useEffect } from 'react';
import SloganIntro from './SloganIntro';
import HomePage from '../../Pages/HomePage/HomePage';

const IntroWrapper = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [exiting, setExiting] = useState(false);

  const handleFinish = () => {
    // Start slide down animation
    setExiting(true);
  };

  // After slide down animation duration (1s), remove intro from DOM
  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => setShowIntro(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [exiting]);

  return (
    <>
      <HomePage />
      {showIntro && <SloganIntro onFinish={handleFinish} exiting={exiting} />}
    </>
  );
};

export default IntroWrapper;
