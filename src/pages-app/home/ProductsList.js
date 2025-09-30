import React from "react";
import { NavLink } from "react-router-dom";

const ProductsList = () => {
  return (
    <section id="nos-produits">
      <h2>Nos produits</h2>
      <div className="container">
        <div className="products-container dg">
          <div className="item df">
            <img
              src="./herbes300.png"
              alt="Fleur de sel de Camargue aux herbes sauvages"
            />
            <h6>Fleur de sel de Camargue aux herbes sauvages</h6>
            <NavLink to="/sel-herbes">
              <button className="button-green">
                <i className="bi bi-leaf"></i>
                Voir le produit
              </button>
            </NavLink>
          </div>
          <div className="item df">
            <img
              src="./thym300.png"
              alt="Fleur de sel de Camargue au thym sauvage"
            />
            <h6>Fleur de sel de Camargue au thym sauvage</h6>
            <NavLink to="/sel-thym">
              <button className="button-green">
                <i className="bi bi-leaf"></i>
                Voir le produit
              </button>
            </NavLink>
          </div>
          <div className="item df">
            <img
              src="./romarin300.png"
              alt="Fleur de sel de Camargue au romarin sauvage"
            />
            <h6>Fleur de sel de Camargue au romarin sauvage</h6>
            <NavLink to="/sel-romarin">
              <button className="button-green">
                <i className="bi bi-leaf"></i>
                Voir le produit
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
