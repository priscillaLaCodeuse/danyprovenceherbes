import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Histoire from "./about/Histoire";
import Mission from "./about/Mission";
import Valeurs from "./about/Valeurs";
import TitleAbout from "./about/TitleAbout";

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <TitleAbout />
        <Histoire />
        <Mission />
        <Valeurs />
      </main>
      <Footer />
    </div>
  );
};

export default About;
