import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

const Mentions = () => {
  return (
    <div className="legal">
      <Header />
      <main>
        <div className="title-page">
          <div className="container">
            <h1>Mentions légales</h1>
          </div>
        </div>

        <div className="container df">
          <em>En vigueur au 01/09/2025</em>
          <br />

          <h2>Édition du site</h2>
          <br />
          <p>
            Le présent site, accessible à l’URL www.danyprovenceherbes.fr
            (ci-après dénommé le « Site »), est édité par : EI Dany Provence
            Herbes, immatriculée au RCS de Tarascon sous le numéro SIRET 850 185
            869 00029, dont le siège social est situé au 12, rue de l’aqueduc
            13150 Tarascon, France.
          </p>
          <br />

          <h2>Hébergement</h2>
          <br />
          <p>
            Le site est hébergé par la société IONOS SARL 7, place de la gare BP
            70109 57200 Sarreguemines Cedex France
            <br />
            <br />
            Contact téléphonique : 0970 808 911
          </p>
          <br />
          <h2>Directeur de publication</h2>
          <br />
          <p>Le directeur de la publication du Site est Dany LIEBALLE.</p>
          <br />
          <h2>Webmaster</h2>
          <br />
          <h6>Webmaster</h6>
          <p>Webilys</p>
          <h6>Site web</h6>
          <NavLink to="https://webilys.fr" target="_blank">
            www.webilys.fr
          </NavLink>
          <h6>Contact :</h6>
          <NavLink to="mailto:contact@webilys.fr">contact@webilys.fr</NavLink>
          <br />
          <br />
          <h2>Contact</h2>
          <br />
          <h6>Par email</h6>
          <NavLink to="mailto:contact@danyprovenceherbes.fr">
            contact@danyprovenceherbes.fr
          </NavLink>
          <h6>Par courrier</h6>
          <p>
            DANY PROVENCE HERBES – 12, rue de l’aqueduc 13150 Tarascon, France
          </p>
          <h6>Via le formulaire de contact</h6>
          <p>
            Disponible à la rubrique{" "}
            <NavLink to="/contact">« Contact »</NavLink>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mentions;
