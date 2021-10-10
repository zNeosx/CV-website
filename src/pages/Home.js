import React from 'react';
import Header from '../components/Header';
import {NavLink} from 'react-router-dom'; 
 

const Home = () => {
    return (
      <div className="body">
        <div id="header">
          <Header />
        </div>
        <div id="menu">
          <div className="menu-logo"></div>
        </div>
        <section id="page" className="homepage">
          <div className="home-container">
              <h2>Bienvenue !</h2>
              <span className="home-name">Je suis <span className="name-color">Vincent AIPAR </span></span>

              <p>Je suis actuellement en formation à la 3W Academy en tant que développeur web et je recherche un entreprise pour effectuer mon alternance. <br /> 
              N'hésitez pas à me contacter si mon profil vous intéresse ou si vous voulez plus d'information sur moi. Bonne visite !</p><br />
              <p>J'ai choisi les spécialités : React et Node.JS.</p>
              <div id="home-to-about-btn">
                <NavLink exact to="/about"><button className="btn">À Propos De Moi</button></NavLink>
              </div>
          </div>
        </section>
        
      </div>
    );
};

export default Home;