import React from "react";

const FormContact = () => {
  return (
    <section className="form-container-contact">
      <form
        action="https://formspree.io/f/xqazeeye"
        method="POST"
        className="df">
        <label htmlFor="nom">
          Nom et prénom<sup>*</sup>
        </label>
        <input type="text" name="nom" />

        <label htmlFor="email">
          Email<sup>*</sup>
        </label>
        <input type="email" name="email" />

        <label htmlFor="telephone">
          Téléphone<sup>*</sup>
        </label>
        <input type="tel" name="telephone" />

        <label htmlFor="message">
          Message<sup>*</sup>
        </label>
        <textarea
          name="message"
          placeholder="Saisissez votre message..."></textarea>

        <button type="submit" className="button-green">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default FormContact;
