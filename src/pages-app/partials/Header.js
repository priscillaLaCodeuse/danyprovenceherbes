import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="df">
      <NavLink to="/" className="logo">
        <img
          src="./logo-dany-provence-herbes.png"
          alt="Logo Dany Provence Herbes"
        />
      </NavLink>

      <nav className="df">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
        <NavLink to="/nos-produits">Nos produits</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
