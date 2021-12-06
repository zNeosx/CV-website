import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="body">
      <div id="header">
        <Header />
      </div>
      <section id="page">
        <div className="contact-container">
          <h2 className="contact-title title-space">Contactez-moi</h2>
          <div className="warning">
            <strong>
              Attention le formulaire n'est pas encore finalisé mais en cours de
              construction &#x1F528;
            </strong>
          </div>
          <div className="formulaire">
            <form action="#" id="form">
              <p>
                <input
                  type="text"
                  name="form-name"
                  placeholder="Nom"
                  class="form__inputs"
                />
              </p>
              <p>
                <input
                  type="text"
                  name="form-firstname"
                  placeholder="Prénom"
                  class="form__inputs"
                />
              </p>
              <p>
                <input
                  type="text"
                  name="form-email"
                  placeholder="Adresse e-mail"
                  class="form__inputs"
                />
              </p>
              <p>
                <textarea
                  name="form-message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Ecriver votre message..."
                  class="form__inputs"
                ></textarea>
              </p>
              <input type="submit" value="Valider" class="btn" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
