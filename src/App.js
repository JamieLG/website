import React from 'react';
import './App.css';
import {Router} from "@reach/router"
import Header from './Components/Header';
import Nav from './Components/Nav';
import Homepage from './Components/Homepage';
import Portfolio from './Components/Portfolio';
import Links from './Components/Links';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <Homepage path="/"/>
        <Portfolio path="/portfolio"/>
        <Links path="/links"/>
      </Router>

    </div>
  );
}

export default App;
