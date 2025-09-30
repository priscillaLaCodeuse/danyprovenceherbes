import React from "react";

const PresentationHerbes = () => {
  return (
    <section className="presentation-product">
      <div className="container dg">
        <img
          src="./herbes.png"
          alt="Fleur de sel de Camargue aux herbes sauvages de Dany Provence Herbes"
        />
        <div>
          <h2>L’essence pure de la Provence</h2>
          <p>
            Laissez-vous transporter par notre fleur de sel de Camargue
            délicatement aromatisée avec du thym, du laurier et du romarin
            sauvages, un rappel de la douceur des journées ensoleillées du Sud.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PresentationHerbes;
