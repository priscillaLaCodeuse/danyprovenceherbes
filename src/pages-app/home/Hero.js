import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container df">
        <div className="df">
          <h1>
            Dany Provence Herbes - Fleurs de sel de Camargue aux herbes sauvages
          </h1>

          <span className="span-title">Artisanales & Provençales</span>

          <p>
            Laissez-vous emporter par la finesse et la pureté de nos fleurs de
            sel artisanales, sublimées par les herbes sauvages de notre région.
            Nos herbes sauvages sont cueillies selon des méthodes
            traditionnelles ancestrales, tout en respectant la biodiversité. Un
            trésor gustatif dont vos papilles ne pourront plus se passer !
          </p>

          <NavLink to="/nos-produits">
            <button className="button-white">Découvrir les produits</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
