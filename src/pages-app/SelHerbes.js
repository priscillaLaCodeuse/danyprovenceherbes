import React from "react";
import TitlePageHerbes from "./herbes-fiche/TitlePageHerbes";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import PresentationHerbes from "./herbes-fiche/PresentationHerbes";
import DescriptionHerbes from "./herbes-fiche/DescriptionHerbes";

const SelHerbes = () => {
  return (
    <div>
      <Header />

      <main>
        <TitlePageHerbes />
        <PresentationHerbes />
        <DescriptionHerbes />
      </main>

      <Footer />
    </div>
  );
};

export default SelHerbes;
