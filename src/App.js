import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

// STEP 2: DECLARE ROUTES
  // IMPORT ROUTE (WHERE YOU DECLARE/SPECIFY ROUTER)
  // CREATE ROUTES AND USE THE PATH PROP FOR THEIR RESPECTIVE COMPONENTS
    // DON'T FORGET TO ADD EXACT FOR THE EXACT COMPONENT

// GO TO NAVIGATION.JS FOR STEP 3

const App = () => (
  <div>
    <Navigation />

    <Route exact path='/ ' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
  </div>
);

export default App;
