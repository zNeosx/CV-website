import React from 'react';
import Header from '../components/Header';
 

const Portefolio = () => {
    return (
      <div className="body">
        <div id="header">
          <Header />
        </div>
        <section id="page">
          <div className="portefolio-container">
            <h2 className="portefolio-title title-space">Bienvenue sur PorteFolio</h2>
            <p>Je n'ai pas encore réalisations à montrer mais j'espère pouvoir le faire très bientot !</p>
          </div>
        </section>
      </div>
    );
};

export default Portefolio;