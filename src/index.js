import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom'

// STEP 1: IMPLEMENTING REACT ROUTER
    // IMPORT BROWSERROUTER AS ROUTER
    // WRAP <APP /> WITH ROUTER COMPONENT

// GO TO APP.JS FOR STEP 2

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    rootElement
);