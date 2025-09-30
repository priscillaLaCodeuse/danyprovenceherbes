import React from "react";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container dg">
        <div className="text-container">
          <h2>Notre mission</h2>
          <p>
            Nous nous consacrons à offrir des herbes aromatiques sauvages
            authentiques, récoltées au coeur de la Provence. Nous croyons
            fermement au respect des traditions de la nature, et c’est cette
            conviction qui guide chacune de nos actions.
          </p>
        </div>

        <img src="./montagnette.webp" alt="Montagnette" />
        <img src="./botte-de-thym.webp" alt="Botte de thym" />
      </div>
    </section>
  );
};

export default Mission;
