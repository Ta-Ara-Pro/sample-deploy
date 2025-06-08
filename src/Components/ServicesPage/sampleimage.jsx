import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import compass from '../../Assets/compass.png';
import arrow from '../../Assets/arrow.png';
import tick from '../../Assets/tick-circle.png';
import InterimRoles from "../InterimRoles/InterimRoles";
import WhyWork from "../WhyWork/WhyWork";
import Layout from "../../Layout";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import sample from "../../Assets/interim.png"

const Interim = () => {
  const { t } = useTranslation();
  const [angle, setAngle] = useState(0);
  const [currentStep, setCurrentStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stepTaker = (index) => {
    setCurrentStep(index);

    const angle = index === 0
      ? 0
      : index === 1
      ? -90
      : index === 2
      ? -180
      : index === 3
      ? -270
      : 0;

    setAngle(angle);
  };

  useEffect(() => {
    const sectionIds = ["cmo-cbo", "why-section", "vs-section", "cmo-cbo"];
    const targetId = sectionIds[currentStep];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1000);
    }
  }, [currentStep]);

  return (
    <div>
      <img
  id="Interim-hero"
  src="/hero.svg"
  alt="hero"
  style={{
    position: "absolute",
    top: 0,
    width: "100%",
    height: "850px", 
    objectFit: "cover",
    zIndex: 0,
  }}
/>

      <Layout />
      <div
        id="experience"
        style={{
          display: "flex",
          alignItems: 'center',
          flexDirection: isMobile ? "column" : "row",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          minHeight: "80vh",
          overflow: "hidden",
          width: '100%',
          zIndex:"1"
   
        }}
      >
        {/* Left Column */}
        <div
          style={{
            width: isMobile ? "100%" : "45%",
            padding: isMobile ? "2rem 2rem" : "5rem 5rem",
            zIndex: 1,
            textAlign: isMobile ? "center" : "left",
            marginTop:"8rem"
          }}
        >
          <h1 style={{ fontSize: isMobile ? "17px" : "20px", fontWeight: "bold", color: "#222" ,lineHeight:"1"}}>
          {t("interim.title").split("\n").map((line, idx) => (
    <div key={idx}>{line}</div>
  ))}
          </h1>
          <p
            style={{
              fontSize: "12px",
              color: "#444",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            {t("interim.description")}
          </p>
          <img src={sample} style={{height:"16rem", width:"18rem", marginTop:"1rem", borderRadius:"5px"}}/>
        </div>

        {/* Right Column */}
        <div
          style={{
            width: isMobile ? "100%" : "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            marginBottom: isMobile ? "3rem" : "0",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flexDirection: "row",
              fontSize: '14px',
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                fontSize: '14px',
                marginRight: '0.3rem'
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  right: '3%',
                  top: isMobile ? '48%' : 'auto',
                  transition: 'all ease 0.5s',
                  zIndex: 2,
                  color: `${currentStep === 1 ? " rgb(0, 139, 252)" : 'black'}`,
                  fontWeight: '600',
                  fontSize: isMobile ? "10px" : "inherit",
                  cursor: 'pointer',
                }}
                onClick={() => stepTaker(1)}
              >
                {t("interim.steps.why")}
              </span>
            </div>

            <div
              style={{
                paddingBottom: '0.8rem',
                paddingTop: '0.8rem',
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                flexDirection: "column",
                fontSize: '14px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: isMobile ? '5%' : '4%',
                  transition: 'all ease 0.5s',
                  zIndex: 2,
                  color: `${currentStep === 0 ? "rgb(0, 139, 252)" : 'black'}`,
                  fontWeight: '600',
                  fontSize: isMobile ? "10px" : "inherit",
                  cursor: 'pointer',
                }}
                onClick={() => stepTaker(0)}
              >
                {t("interim.steps.interimCMO")}
              </span>

              <img
                src={compass}
                alt="compass"
                style={{
                  width: "100%",
                  height: "auto",
                  backgroundImage: `url(${compass})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  margin: '2rem 0rem',
                  position: 'relative',
                  zIndex: 2,
                }}
              />

              <img
                src='./circlearrow.svg'
                alt="arrow"
                style={{
                  zIndex: 2,
                  position: 'absolute',
                  bottom: `${currentStep === 0 ? '44%' :
                    currentStep === 1 ? '50%' :
                      currentStep === 2 ? '56%' :
                        currentStep === 3 ? '50%' : '45%'} `,
                  left: `${currentStep === 0 ? '40%' :
                    currentStep === 1 ? '50%' :
                      currentStep === 2 ? '40%' :
                        currentStep === 3 ? '35%' : 'none'} `,
                  width: isMobile ? '18%' : '20%',
                  transformOrigin: 'bottom center',
                  rotate: `${angle}deg`,
                  transition: 'all ease 0.7s',
                }}
              />

              <span
                style={{
                  position: 'absolute',
                  bottom: isMobile ? '5%' : '5%',
                  transition: 'all ease 0.5s',
                  zIndex: 2,
                  color: `${currentStep === 2 ? " rgb(0, 139, 252)" : 'black'}`,
                  fontWeight: '600',
                  fontSize: isMobile ? "10px" : "inherit",
                  cursor: 'pointer',
                }}
                onClick={() => stepTaker(2)}
              >
                {t("interim.steps.vs")}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                fontSize: '14px',
                marginLeft: '0.3rem'
              }}
            >
              <span
                style={{
                  margin: 'auto',
                  position: 'absolute',
                  left: '0%',
                  top: isMobile ? '48%' : 'auto',
                  transition: 'all ease 0.5s',
                  zIndex: 2,
                  color: `${currentStep === 3 ? " rgb(0, 139, 252)" : 'black'}`,
                  fontWeight: '600',
                  fontSize: isMobile ? "10px" : "inherit",
                  cursor: 'pointer',
                }}
                onClick={() => stepTaker(3)}
              >
                {t("interim.steps.interimCBO")}
              </span>
            </div>

            <img
              src={'/interimFullRings.svg'}
              alt='rings'
              style={{
                width: isMobile ? '55vw' : '70%',
                position: 'absolute',
                right: isMobile ? '15%' : '10%',
                top: isMobile ? '2%' : '0%',
                zIndex: 1,
                overflow: 'auto'
              }}
            />
          </div>
        </div>
      </div>

      <InterimRoles />
      <WhyWork />
      <Footer />
    </div>
  );
};

export default Interim;
