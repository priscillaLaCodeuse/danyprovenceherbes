import React from "react";
import Header from "./partials/Header";
import TitleContact from "./contact/TitleContact";
import Footer from "./partials/Footer";
import IntroContact from "./contact/IntroContact";
import InfosContact from "./contact/InfosContact";
import FormContact from "./contact/FormContact";

const Contact = () => {
  return (
    <div>
      <Header />

      <main>
        <TitleContact />
        <IntroContact />
        <div className="contact-dg dg">
          <InfosContact />
          <FormContact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
