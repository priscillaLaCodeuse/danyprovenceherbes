import React from "react";
import { NavLink } from "react-router-dom";

const Trio = () => {
  return (
    <section id="trio">
      <div class="dg">
        <div class="title-container">
          <img src="./trio-home.png" alt="Le trio sauvage" />
          <h2>Le trio sauvage</h2>
        </div>
        <div class="text-container">
          <h3>Pour toutes vos recettes</h3>
          <p>
            Découvrez "Le trio sauvage", un ensemble de trois fleurs de sel de
            Camargue aux saveurs exquises d'herbes sauvages.
            <br />
            <br />
            Il comprend une fleur de sel parfumée au thym, au laurier et au
            romarin, ainsi que deux autres aux saveurs distinctes : une aux
            arômes puissants de thym sauvage et l'autre au romarin sauvage, pour
            des créations culinaires pleines de caractère.
          </p>
          <NavLink to="/trio-sels">
            <button class="button-white">Je découvre le trio sauvage</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Trio;
