import React from "react";
import { NavLink } from "react-router-dom";

const ProductsItems = () => {
  return (
    <section id="products-items">
      <div className="container dg">
        <NavLink to="/sel-herbes">
          <div className="item" id="item-herbes">
            <img
              src="./herbes.png"
              alt="Fleur de sel de Camargue aux herbes sauvages de Dany Provence Herbes"
            />
            <h2>Fleur de sel de Camargue aux herbes sauvages</h2>
          </div>
        </NavLink>
        <NavLink to="/sel-thym">
          <div className="item" id="item-thym">
            <img
              src="./thym.png"
              alt="Fleur de sel de camargue au thym sauvage de Dany Provence Herbes"
            />
            <h2>
              Fleur de sel de Camargue <br />
              au thym sauvage
            </h2>
          </div>
        </NavLink>
        <NavLink to="/sel-romarin">
          <div className="item" id="item-romarin">
            <img
              src="./romarin.png"
              alt="Fleur de sel de Camargue au romarin sauvage de Dany Provence Herbes"
            />
            <h2>
              Fleur de sel de Camargue <br /> au romarin sauvage
            </h2>
          </div>
        </NavLink>
        <NavLink to="/trio-sels">
          <div className="item" id="item-trio">
            <img
              src="./les-sels.png"
              alt="Le trio sauvage de Dany Provence Herbes"
            />
            <h2>
              Le trio sauvage
              <br />
              (Pack de 3 fleurs de sel)
            </h2>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default ProductsItems;
