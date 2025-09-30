import React from "react";
import Header from "./partials/Header";
import TitlePageThym from "./thym-fiche/TitlePageThym";
import PresentationThym from "./thym-fiche/PresentationThym";
import DescriptionThym from "./thym-fiche/DescriptionThym";
import Footer from "./partials/Footer";

const SelThym = () => {
  return (
    <div>
      <Header />

      <main>
        <TitlePageThym />
        <PresentationThym />
        <DescriptionThym />
      </main>

      <Footer />
    </div>
  );
};

export default SelThym;
