import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discography from './Discography';
import Contact from './Contact';
import Samples from './Samples';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Home">
            <Home />
        </Route>
        <Route path="/Discography">
          <Discography />
        </Route>
        <Route path="/Samples">
            <Samples />
        </Route>
        <Route path="Contact">
            <Contact />
        </Route>
      </div>
    </Router>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
