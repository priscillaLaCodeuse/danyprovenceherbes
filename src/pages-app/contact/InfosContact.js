import React from "react";
import { NavLink } from "react-router-dom";

const InfosContact = () => {
  return (
    <section className="infos-contact df">
      <div>
        <div className="df">
          <i className="bi bi-clock-fill"></i>
          <h6>Horaires</h6>
        </div>
        <p>Du lundi au vendredi : 09h00 - 17h00</p>
      </div>

      <div>
        <div className="df">
          <i className="bi bi-envelope-at-fill"></i>
          <h6>Email</h6>
        </div>
        <NavLink to="mailto:contact@danyprovenceherbes.fr">
          contact@danyprovenceherbes.fr
        </NavLink>
      </div>
    </section>
  );
};

export default InfosContact;
