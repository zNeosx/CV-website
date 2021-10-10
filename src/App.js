import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../../website-cv/src/pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portefolio from './pages/Portefolio';
import Contact from './pages/Contact';

const App = () => {
  alert('Bienvenue sur mon site ! Il est actuellement en cours de finalisation. Bonne navigation !'); 
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/portefolio" exact component={Portefolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
