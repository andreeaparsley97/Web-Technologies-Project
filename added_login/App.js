import React from 'react';
import labelogo from './HTH121-Hodge____FB-COVER.jpg'
import pressShot1 from './Pressshots2020/HNKC_200211_HODGE_PressShots-3982_web.jpg';
import pressShot2 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4061_web.jpg';
import pressShot3 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4175_web.jpg';
import pressShot4 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4531_web.jpg';
import pressShot5 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4571_web.jpg';
import pressShot6 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4577_web.jpg';
import './App.css';
import Footer from "./Footer";
import Button from './button';
import Navbar from "./navbar";
import Margin from "./margins";
import Discography from "./discography";
import {LandingPage} from './landingpage';
import {BrowserRouter, Route, Switch} from "react-router-dom"; /* gives access to the history API and keeps the UI in sync with the URL */
import {LogDiscography} from "./logdiscography";


function App() {

  return (
    <div>
        <Switch>
        <Route exact path = "/" component = {LandingPage}/>
        <Route exact path = "/login" component = {LogDiscography}/>
        <Route path = "*" component = {() => "404 NOT FOUND"}/>
        </Switch>
    </div>
  );
}


export default App;
