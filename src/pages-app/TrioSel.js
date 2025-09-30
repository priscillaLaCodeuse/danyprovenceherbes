import React from "react";
import Header from "./partials/Header";
import TitlePageTrio from "./trio-fiche/TitlePageTrio";
import PresentationTrio from "./trio-fiche/PresentationTrio";
import DescriptionTrio from "./trio-fiche/DescriptionTrio";
import Footer from "./partials/Footer";

const TrioSel = () => {
  return (
    <div>
      <Header />

      <main>
        <TitlePageTrio />
        <PresentationTrio />
        <DescriptionTrio />
      </main>

      <Footer />
    </div>
  );
};

export default TrioSel;
