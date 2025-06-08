import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExperiencePage from './Components/Experience/Experience';
import HomePage from './Pages/HomePage/HomePage';
import Layout from './Layout';
import About from './Components/About/About';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import ServiceReal from './Components/ServiceReal/ServiceReal';
import KeepInTouch from './Components/KeepInTouch/KeepInTouch';
import './i18n';
import Interim from './Components/ServicesPage/Interim';
import IntroWrapper from './Components/SloganIntro/IntroWrapper';
import CookieAlert from './Components/CookieAlert/CookieAlert';

const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/interim" element={<Interim />} />
          <Route path="/consultancy" element={<ServiceReal />} />
          <Route path="/contact-us" element={<KeepInTouch />} />
          <Route path="/" element={<IntroWrapper />} />
        </Route>
      </Routes>

      
      <CookieAlert />
    </>
  );
};

export default App;
