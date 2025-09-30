import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div>
          <h6>À propos</h6>
          <p>
            Dany Provence Herbes est une entreprise située à Tarascon, au cœur
            de la Provence.
          </p>
        </div>

        <div>
          <h6>Liens utiles</h6>
          <ul>
            <li>
              <NavLink to="/a-propos">À propos</NavLink>
            </li>
            <li>
              <NavLink to="/nos-produits">Nos produits</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h6>Liens légaux</h6>
          <ul>
            <li>
              <NavLink to="/mentions-legales">Mentions légales</NavLink>
            </li>
            <li>
              <NavLink to="/cgu">CGU</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span>
          ©2025 - <NavLink to="/">Dany Provence Herbes</NavLink> - Développé par{" "}
          <NavLink to="https://webilys.fr" target="_blank">
            Webilys
          </NavLink>{" "}
          - Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
