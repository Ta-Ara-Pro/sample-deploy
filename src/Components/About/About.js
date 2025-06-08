import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import compass from "../../Assets/compass.png";
import Interim from "../Interim/Interim";
import TargetGroups from "../TargetGroups/TargetGroups";
import BrandsSection from "../BrandsSection/BrandsSection";
import Refrences from "../Refrences/Refrences";
import ContactSection from "../ContactSection/ContactSection";
import Collaborative from "../Collaborative/Collaborative";
import Footer from "../Footer/Footer";
import Layout from "../../Layout";
import { useLocation } from "react-router-dom";

const About = () => {
  const { t, i18n } = useTranslation();
  const [angle, setAngle] = useState(0);
  const [currentStep, setCurrentStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stepTaker = (index) => {
    // setTimeout(() => {
    setCurrentStep(index);

    const angle =
      index === 0
        ? 0
        : index === 1
        ? -90
        : index === 2
        ? -180
        : index === 3
        ? -270
        : 0;

    setAngle(angle);
    // }, 500);
  };

  useEffect(() => {
    const sectionIds = ["marketing", "reference", "target", "collaborative"];
    const targetId = sectionIds[currentStep];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1000);
    }
  }, [currentStep]);

  return (
    <div id="About-hero">
      <img
        src="/hero.svg"
        alt="hero"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "100%",
          zIndex: 0,
          height: "100vh",
          objectFit: "cover",
        }}

       /*
          style={{
    position: "absolute",
    top: 0,
    width: "100%",
    height: "780px", 
    objectFit: "cover",
    zIndex: 0,
  }}
          */
      />
      <Layout />
      <div
        id="experience"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* Background */}
        {/* <img
          src="/hero.svg"
          alt="hero"
          style={{
            position: "absolute",
            bottom: '-20%',
          }}
        /> */}

        {/* Left Column */}
        <div
          style={{
            width: isMobile ? "100%" : "50%",
            padding: isMobile ? "3rem 2rem" : "10rem 5rem",
            zIndex: 1,
            marginTop: "-5rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "22px" : "28px",
              fontWeight: "bold",
              color: "#222",
            }}
          >
            {t("about_title")}
          </h1>
          <h1
            style={{
              fontSize: isMobile ? "22px" : "28px",
              fontWeight: "bold",
              color: "#222",
            }}
          >
            {t("about_title2")}
          </h1>
          <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6" }}>
            {t("about_intro_1")}
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: "1.6",
              marginBottom: "2rem",
            }}
          >
            {t("about_intro_2")}
          </p>

          <strong style={{ fontSize: "16px" }}>{t("about_deliver")}</strong>

          {t("about_items", { returnObjects: true }).map((item, index) => (
            <p
              key={index}
              style={{
                fontSize: "14px",
                color: "#444",
                display: "flex",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <img
                src='/blueTick2.svg'
                alt="tick"
                style={{ width: "18px", height: "18px", marginRight: "8px" }}
              />
              {item}
            </p>
          ))}

          <p
            style={{
              fontSize: "14px",
              color: "#444",
              marginTop: "1rem",
            }}
          >
            {t("about_impact")}
          </p>
        </div>

        {/* Right Column */}
        <div
          style={{
            width: isMobile ? "100%" : "65%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            marginBottom: isMobile ? "3rem" : "0",
          }}
        >
          <div
            style={{
              // maxWidth: "800px",
              width: "100%",
              height: "auto",
              // height: isMobile ? "auto" : "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              flexDirection: "row",
              fontSize: "14px",
              // padding:'2rem 0rem',
              // backgroundColor: 'rgb(250, 159, 159)',
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                fontSize: "14px",
                marginRight: "0.3rem",
                // backgroundColor: 'rgb(159, 250, 160)',
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  position: "absolute",
                  right: isMobile ? "8%" : "-5%",
                  top: "auto",
                  transition: "all ease 0.5s",
                  zIndex: 2,
                  color: `${currentStep === 1 ? " rgb(0, 139, 252)" : "black"}`,
                  fontWeight: "600",
                  fontSize: isMobile ? "10px" : "inherit",
                  cursor: "pointer",
                }}
                onClick={() => stepTaker(1)}
              >
                {" "}
                {t("step_reference")
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </span>
            </div>
            <div
              style={{
                paddingBottom: "1.5rem",
                paddingTop: "3.5rem",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                flexDirection: "column",
                fontSize: "14px",
                // backgroundColor: 'rgb(227, 250, 159)',
              }}
            >
              <span
                style={{
                  textAlign: "left",
                  position: "absolute",
                  top: "0%",
                  transition: "all ease 0.5s",
                  zIndex: 2,
                  color: `${currentStep === 0 ? "rgb(0, 139, 252)" : "black"}`,
                  fontWeight: "600",
                  fontSize: isMobile ? "10px" : "inherit",
                  cursor: "pointer",

                  marginTop: "1rem",
                }}
                onClick={() => stepTaker(0)}
              >
                {" "}
                {t("step_marketing")}
                <br />
                {i18n.language === "en" ? t("step_marketing2") : ""}
              </span>
              <img
                src={compass}
                alt="compass"
                style={{
                  width: "100%",
                  // width: isMobile ? "40vw" : "27vw",
                  height: "auto",
                  backgroundImage: `url(${compass})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  position: "relative",
                  // cursor: 'pointer',
                  zIndex: 2,
                }}
                // onClick={() => stepTaker()}
              />

              <img
                src="./circlearrow.svg"
                alt="arrow"
                style={{
                  zIndex: 2,
                  position: "absolute",
                  bottom: `${
                    currentStep === 0
                      ? "42%"
                      : currentStep === 1
                      ? "48%"
                      : currentStep === 2
                      ? "54%"
                      : currentStep === 3
                      ? "48%"
                      : "42%"
                  }`,
                  left: `${
                    currentStep === 0
                      ? "40%"
                      : currentStep === 1
                      ? "50%"
                      : currentStep === 2
                      ? "40%"
                      : currentStep === 3
                      ? "33%"
                      : "none"
                  }`,
                  width: isMobile ? "18%" : "20%",
                  // cursor: 'pointer',
                  transformOrigin: "bottom center",
                  rotate: `${angle.toString() + "deg"}`,
                  transition: "all ease 0.7s",
                }}
                // onClick={() => stepTaker()}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: isMobile ? "5%" : "0%",
                  transition: "all ease 0.5s",
                  zIndex: 2,
                  color: `${currentStep === 2 ? " rgb(0, 139, 252)" : "black"}`,
                  fontWeight: "600",
                  fontSize: isMobile ? "10px" : "inherit",
                  cursor: "pointer",
                }}
                onClick={() => stepTaker(2)}
              >
                {t("step_target")}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                fontSize: "14px",
                marginLeft: "0.3rem",
                // backgroundColor: 'rgb(159, 250, 160)',
              }}
            >
              <span
                style={{
                  margin: "auto",
                  position: "absolute",
                  left: "0%",
                  top: "auto",
                  transition: "all ease 0.5s",
                  zIndex: 2,
                  color: `${currentStep === 3 ? " rgb(0, 139, 252)" : "black"}`,
                  fontWeight: "600",
                  fontSize: isMobile ? "10px" : "inherit",
                  cursor: "pointer",
                }}
                onClick={() => stepTaker(3)}
              >
                {t("step_collaborative")
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </span>
            </div>

            <img
              src={"/interimFullRings.svg"}
              alt="rings"
              style={{
                width: isMobile ? "55vw" : "70%",
                position: "absolute",
                right: isMobile ? "15%" : "10%",
                top: isMobile ? "2%" : "0%",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
      <Interim />
      <TargetGroups />
      <Collaborative />
      <Refrences />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
