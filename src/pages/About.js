import React from 'react';
import Header from '../components/Header';


const About = () => {
    return (
      <div className="body">

        <div id="header">
          <Header />
        </div>
        
        <section id="page">
          <div className="about">
            <h2 className="section-title title-space">About Me</h2>
            <div className="info">
              <h3>
                <span>Nom : </span> Vincent AIPAR
              </h3>
              <h3>
                <span>Age : </span> 21 ans
              </h3>
              <h3>
                <span>Origine : </span> La Réunion
              </h3>
              <h3>
                <span>École : </span> 3W Academy
              </h3>
              <h3>
                <span>Spécialisation : </span> React, React Native et Node.js
              </h3>
              <h3>
                <span>Secteur de recherche : </span> Réunion - Toulouse - Montpellier - Lyon
              </h3>
              <div id="cv-btn">
                <a href={process.env.PUBLIC_URL + `documents/CV-Vincent-AIPAR.pdf`} target="_blank"><button>Téléchargez mon CV</button></a>
              </div>
            </div>
            <span className="box-title">Formations</span>
            <div className="box">
              <div className="box-item">
                <div className="box-item-inner">
                  <i className="fas fa-graduation-cap icon"></i>
                  <span>2017 - 2020</span>
                  <h3>Licence EEA : Electronique Energie electrique Automatique </h3>
                  <p>Université de la Réunion (Campus Moufia)</p>
                </div>
              </div>
              <div className="box-item">
                <div className="box-item-inner">
                  <i className="fas fa-graduation-cap icon"></i>
                  <span>2020 - 2021</span>
                  <h3>Master 1EEA : Ingénierie des Systèmes Temps Réels</h3>
                  <p>Université de Toulouse 3 - Paul Sabatier</p>
                </div>
              </div>
              <div className="box-item">
                <div className="box-item-inner">
                  <i className="fas fa-graduation-cap icon"></i>
                  <span>2021</span>
                  <h3>Développeur/Intégrateur en réalisation WEB</h3>
                  <p>3W Academy - Téléprésentiel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
};

export default About;