import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container df">
        <div className="text-container df">
          <h2>Histoire de Dany Provence Herbes</h2>
          <p>
            Fondée en 2019, Dany Provence Herbes est le fruit d’une passion
            profonde pour les trésors cachés de la Provence inspirée par la
            richesse de cette région.
            <br />
            Notre entreprise est née avec une mission : partager les saveurs
            authentiques de la Provence avec le monde.
          </p>
          <NavLink to="/a-propos">
            <button className="button-white">En savoir plus</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
