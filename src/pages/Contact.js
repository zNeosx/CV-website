import React from 'react';
import Header from '../components/Header';

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
            <strong>Attention le formulaire n'est pas encore finalisé mais en cours de construction &#x1F528;</strong>
          </div>
          <div className="formulaire">
            <form action="#">
              <p>Nom :<label htmlFor="name"><input type="text" name="form-name" placeholder="Nom" /></label></p>
              <p>Prénom :<label htmlFor="firstname"><input type="text" name="form-firstname" placeholder="Prénom" /></label></p>
              <p>Adresse e-mail : <label htmlFor="email"><input type="text" name="form-email" placeholder="Adresse e-mail" /></label></p>
              <p>Message : <textarea name="form-message" id="" cols="30" rows="10"></textarea></p>
              <input type="submit" value="valider" />
            </form>
          </div>
          
          </div>
        </section>
      </div>
    );
};

export default Contact;