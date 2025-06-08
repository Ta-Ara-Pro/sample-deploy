import React, { useEffect, useState } from "react";
import compass from '../../Assets/compass.png';
import sample from '../../Assets/interim.png';
import InterimRoles from "../InterimRoles/InterimRoles";
import WhyWork from "../WhyWork/WhyWork";
import Layout from "../../Layout";
import Footer from "../Footer/Footer";

const ServicesPage = () => {
  const [angle, setAngle] = useState(0);
  const [currentStep, setCurrentStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stepTaker = () => {
    setTimeout(() => {
      setCurrentStep((prev) => {
        const next = prev >= 3 ? 0 : prev + 1;
        return next;
      });

      setAngle((prevAngle) => prevAngle - 90);
    }, 500);
  };

  useEffect(() => {
    const sectionIds = ["cmo-cbo", "why-section", "vs-section", "cmo-cbo"];
    const targetId = sectionIds[currentStep];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    }
  }, [currentStep]);

  return (
    <div>
      <img
          src="/hero.svg"
          alt="hero"
          style={{
            position: "absolute",
            bottom: "-20%",
            width: "100%",
            zIndex: 0,
          }}
        />
    <Layout />
      <div
        id="experience"
        style={{
          display: "flex",
          alignItems:'center',
          flexDirection: isMobile ? "column" : "row",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          width: '100%',
        }}
      >
        {/* Background */}
        {/* <img
          src="/hero.svg"
          alt="hero"
          style={{
            position: "absolute",
            bottom: '-20%',
            width: "100%",
            zIndex: 0,
          }}
        /> */}

        {/* Left Column */}
        <div
          style={{
            width: isMobile ? "100%" : "40%",
            padding: isMobile ? "3rem 2rem" : "10rem 5rem",
            zIndex: 1,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: "bold", color: "#222" }}>
            Executive-Level Interim Leadership
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "#444",
              lineHeight: "1.6",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            I take on CMO and CBO roles to lead marketing and brand in times of change. Creative. Strategic. Tech-savvy. Focused on growth.
          </p>
          <img src={sample}/>
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
              width: isMobile ? "70%" : "70%",
              height:"auto" ,
              // height: isMobile ? "auto" : "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flexDirection: "column",
              fontSize:'14px',
              // backgroundColor: 'rgb(250, 159, 159)',
              
            }}
          >
            {/* Labels */}
            <span
              style={{
                position: 'absolute',
                top: isMobile ? '5%' : '0%',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 0 ? "rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
              }}
            > Interim CMO</span>
            <span
              style={{
                position: 'absolute',
                left: isMobile ? '8%' : '12%',
                top: isMobile ? '48%' : 'auto',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 1 ? " rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
              }}
            > Why?</span>
            <span
              style={{
                position: 'absolute',
                bottom: isMobile ? '5%' : '0%',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 2 ? " rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
              }}
            > CMO vs CBO</span>
            <span
              style={{
                margin:'auto',
                position: 'absolute',
                right: isMobile ? '0%' : '0%',
                top: isMobile ? '48%' : 'auto',
                transition: 'all ease 0.5s',
                zIndex: 2,
                color: `${currentStep === 3 ? " rgb(0, 139, 252)" : 'black'}`,
                fontWeight: '600',
                fontSize: isMobile ? "10px" : "inherit",
              }}
            > Interim CBO</span>

            {/* Compass Image */}
            <img
              src={compass}
              alt="compass"
              style={{
                width: isMobile ? "40vw" : "25vw",
                maxWidth: "400px",
                height: "auto",
                backgroundImage: `url(${compass})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                margin: '2rem 0rem',
                position: 'relative',
                cursor: 'pointer',
                zIndex: 2,
              }}
              onClick={stepTaker}
            />

            {/* Arrow */}
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
                left: `${currentStep === 0 ? '44%' :
                  currentStep === 1 ? '50%' :
                    currentStep === 2 ? '44%' :
                      currentStep === 3 ? '40%' : 'none'} `,
                width: isMobile ? '11%' : '12%',
                cursor: 'pointer',
                transformOrigin: 'bottom center',
                rotate: `${angle}deg`,
                transition: 'all ease 0.7s',
              }}
              onClick={stepTaker}
            />

            {/* Rings Background */}
            <img
              src={'/interimFullRings.svg'}
              alt='rings'
              style={{
                width: isMobile ? '55vw' : '80%',
                position: 'absolute',
                right: isMobile ? '15%' : '0%',
                top: isMobile ? '2%' : '0%',
                zIndex: 1,
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

export default ServicesPage;
