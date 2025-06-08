import React, { useEffect, useState } from "react";
import compass from "../../Assets/compass.png";
import arrow from "../../Assets/arrow.png";
import tick from "../../Assets/tick-circle.png";
import GrowthArchitect from "../GrowthArchitect/GrowthArchitect";
import BrandNavigator from "../BrandNavigator/BrandNavigator";
import ConsultancyLab from "../ConsultancyLab/ConsultancyLab";
import TopTrends from "../TopTrends/TopTrends";
import Layout from "../../Layout";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceReal = () => {
  const [angle, setAngle] = useState(0);
  const [currentStep, setCurrentStep] = useState(null);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const stepTaker = (index) => {
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
  };

  useEffect(() => {
    const sectionIds = ["growth", "trends", "consultancy", "brand-nav"];
    const targetId = sectionIds[currentStep];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1000);
    }

    document.documentElement.style.setProperty("--angle", `${angle}deg`);
  }, [currentStep, angle]);

  const deliverables = [
    t("services.deliverables.0"),
    t("services.deliverables.1"),
    t("services.deliverables.2"),
    t("services.deliverables.3"),
  ];

  return (
    <>
      <img
        id="consulting-hero"
        src="/hero.svg"
        alt="hero"
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 0,
          height: "100vh",
          objectFit: "cover",
        }}
      />
      <Layout />
      <div
        id="experience"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Left Column */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "600px",
            padding: "8rem 5rem",
            zIndex: 1,
          }}
        >
          <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#222" }}>
            {t("services.title")}
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#444",
              lineHeight: "1.6",
              marginBottom: "1rem",
            }}
          >
            {t("services.description.line1")}
            <br />
            {t("services.description.line2")}
            <br />
            {t("services.description.line3")}
          </p>

          <strong style={{ fontSize: "16px" }}>{t("services.subtitle")}</strong>

          {deliverables.map((item, index) => (
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
              <span>
                {item.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </p>
          ))}
        </div>

        {/* Right Column - Compass */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            padding: "2rem",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "80vw",
              maxWidth: "400px",
              aspectRatio: "1/1",
            }}
          >
            {/* Labels */}
            <span
              className={`label top ${currentStep === 0 ? "active" : ""}`}
              onClick={() => stepTaker(0)}
            >
              {t("services.labels.growth")}
            </span>
            <span
              className={`label left ${currentStep === 1 ? "active" : ""}`}
              onClick={() => stepTaker(1)}
            >
              {t("services.labels.trends")}
            </span>
            <span
              className={`label bottom ${currentStep === 2 ? "active" : ""}`}
              onClick={() => stepTaker(2)}
            >
              {t("services.labels.consultancy")}
            </span>
            <span
              className={`label right ${currentStep === 3 ? "active" : ""}`}
              onClick={() => stepTaker(3)}
            >
              {t("services.labels.brand")
                .split("\n")
                .map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </span>

            {/* Compass Image */}
            <img
              src={compass}
              alt="compass"
              style={{
                width: "90%",
                height: "auto",
                position: "relative",
                zIndex: 2,
              }}
            />

            {/* Rotating Arrow */}
            <img
              src="./circlearrow.svg"
              alt="arrow"
              style={{
                marginLeft: "-1.2rem",
                marginBottom: "1.5rem",
                zIndex: 2,
                position: "absolute",
                bottom: `${
                  currentStep === 0
                    ? "44%"
                    : currentStep === 1
                    ? "50%"
                    : currentStep === 2
                    ? "56%"
                    : currentStep === 3
                    ? "50%"
                    : "44%"
                }`,
                left: `${
                  currentStep === 0
                    ? "42%"
                    : currentStep === 1
                    ? "50%"
                    : currentStep === 2
                    ? "42%"
                    : currentStep === 3
                    ? "34%"
                    : "42%"
                }`,
                width: "18%",
                transformOrigin: "bottom center",
                rotate: `${angle}deg`,
                transition: "all ease 0.7s",
              }}
            />

            {/* Decorative Rings */}
            <img
              src="/interimFullRings.svg"
              alt="rings"
              style={{
                position: "absolute",
                top: 0,
                marginTop: "-2rem",
                marginRight: "5rem",
                marginLeft: "-2rem",
                left: 0,
                width: "120%",
                height: "auto",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <GrowthArchitect />
      <BrandNavigator />
      <ConsultancyLab />
      <TopTrends />

      {/* Inline CSS for labels */}
      <style>{`
        .label {
          position: absolute;
          font-weight: 600;
          color: black;
          z-index: 3;
          text-align: left;
          font-size: clamp(0.75rem, 1vw + 0.5rem, 1rem);
          transition: color 0.3s ease;
          cursor: pointer; 
        }
        .label.active {
          color: rgb(0, 139, 252);
        }
        .label.top {
          top: 0%;
          margin-top: -2rem;
          left: 45%;
          transform: translateX(-50%);
        }
        .label.left {
          top: 50%;
          left: 0%;
          margin-left: -4rem;
          transform: translateY(-50%);
        }
        .label.bottom {
          bottom: 0;
          left: 47%;
          margin-top: 1rem;
          transform: translateX(-50%);
        }
        .label.right {
          top: 50%;
          right: 0;
          margin-right: -3rem;
          transform: translateY(-50%);
        }

        @media (max-width: 768px) {
          .label {
            font-size: 0.8rem;
          }
        }
      `}</style>
      <Footer />
    </>
  );
};

export default ServiceReal;
