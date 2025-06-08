import React, { useEffect } from "react";
import ContactSection from "../ContactSection/ContactSection";
import Layout from "../../Layout";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

const KeepInTouch = () => {
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
    return (
        <>
        <img
  id="Contact-hero"
  src="/hero.svg"
  alt="hero"
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    zIndex: -1,
  }}
/>


                <Layout />
        <ContactSection/>
        <Footer/>
        </>
    )
}

export default KeepInTouch