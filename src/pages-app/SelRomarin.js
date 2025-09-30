import React from "react";
import Header from "./partials/Header";
import TitlePageRomarin from "./romarin-fiche/TitlePageRomarin";
import PresentationRomarin from "./romarin-fiche/PresentationRomarin";
import DescriptionRomarin from "./romarin-fiche/DescriptionRomarin";
import Footer from "./partials/Footer";

const SelRomarin = () => {
  return (
    <div>
      <Header />

      <main>
        <TitlePageRomarin />
        <PresentationRomarin />
        <DescriptionRomarin />
      </main>

      <Footer />
    </div>
  );
};

export default SelRomarin;
