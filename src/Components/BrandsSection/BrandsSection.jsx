import React from 'react';
import './BrandsSection.css';

import logo1 from '../../Assets/1.png.png';
import logo2 from '../../Assets/2.png.png';
import logo3 from '../../Assets/3.png.png';
import logo4 from '../../Assets/4.png.png';
import logo5 from '../../Assets/5.png.png';
import logo6 from '../../Assets/6.png.png';
import logo7 from '../../Assets/7.png.png';
import { useTranslation } from 'react-i18next';

// const brandLogos = [ logo1, logo2, logo3, logo4, logo5, logo6, logo7];
const brandLogos = [
  '/logo1.svg',
  '/audi.svg', '/bugatti.svg', './henkel.svg', '/freix.svg', '/heinken.svg', '/gosser.svg'];

const BrandsSection = () => {
    const { t } = useTranslation();
    const HandleMoreClick = () => {
      window.location.href='/about';
    }
  return (
    <section className="brands-section">
      <h2 className="brands-title">{t('brands.title')}</h2>

      <div className="brands-logos">
        {brandLogos.map((logo, index) => (
          <React.Fragment key={index}>
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="brand-logo"
              style={{
                width: index === 3 ? '75px' : undefined,
                height: index === 3 ? '35px' : undefined,
              }}
            />
            {index === 3 && <div className="logo-divider" />}
          </React.Fragment>
        ))}
      </div>

      <p className="brands-description">
        {t('brands.description')
          .split('\n')
          .map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
      </p>

      <button className="brands-more-button" onClick={HandleMoreClick}>
        {t('brands.moreButton').split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </button>
    </section>
  );
};

export default BrandsSection;
