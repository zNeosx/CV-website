import React from 'react';
import {NavLink} from 'react-router-dom'; 
 

const Header = () => {
    return (
      <div className="header">
          <div className="user">
            <div className="header-logo"></div>
            <h3 className="header-name">Vincent AIPAR</h3>
            <p className="header-desc">Formation Développeur Full Stack</p>
          </div>

        <div className="nav-header">
            <div className="nav-ul">
                <NavLink exact to="/" className="nav-link" activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="/about" className="nav-link" activeClassName="nav-active">
                À propos
            </NavLink>
            <NavLink exact to="/skills" className="nav-link" activeClassName="nav-active">
                Compétences
            </NavLink>
            <NavLink
                exact to="/portefolio"
                className="nav-link"
                activeClassName="nav-active"
            >
                PorteFolio
            </NavLink>
            <NavLink exact to="/contact" className="nav-link" activeClassName="nav-active">
                Contact
            </NavLink>
            </div>
        </div>
      </div>
    );
};

export default Header;