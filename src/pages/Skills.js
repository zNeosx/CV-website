import React from "react";
import Header from "../components/Header";

const Skills = () => {
  return (
    <div className="body">
      <div id="header">
        <Header />
      </div>
      <section id="page">
        <div className="skills-container">
          <h2 className="skills-title title-space">Mes Compétences</h2>

          <div className="grid">
            <div className="grid-box">
              <span className="box-title">Front-End</span>
              <ul>
                <li className="grid-item">HTML</li>
                <li className="grid-item">CCS</li>
                <li className="grid-item">Javascript</li>
                <li className="grid-item">React Js (en cours)</li>
              </ul>
            </div>

            <div className="grid-box">
              <span className="box-title">Back-End</span>
              <ul>
                <li className="grid-item">MySQL</li>
                <li className="grid-item">PHP</li>
                <li className="grid-item">Node.js (en cours)</li>
                <li className="grid-item"></li>
              </ul>
            </div>

            <div className="grid-box">
              <span className="box-title">Autres Langages</span>
              <ul>
                <li className="grid-item">C pour Arduino</li>
                <li className="grid-item">Langage C</li>
                <li className="grid-item">VHDL</li>
                <li className="grid-item">Scilab</li>
                <li className="grid-item">Matlab</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
