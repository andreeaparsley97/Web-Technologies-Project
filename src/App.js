import React from 'react';
import labelogo from './HTH121-Hodge____FB-COVER.jpg'
import pressShot3 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4175_web.jpg';
import pressShot4 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4531_web.jpg';
import pressShot6 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4577_web.jpg';
import Footer from "./Footer";
import Navbar from "./navbar";
import Discography from "./Discography";
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SIB from "./shadowsInBlue.jpg";

function App() {

  return (
    <div className="App">
     <Navbar className="navbar"/>
      <body className="App-header" id="body_content">
        <a href="https://hodgebristol.bandcamp.com/album/shadows-in-blue">
          <img src = {SIB} className="labelogo" alt="none"/>
        </a>
        <p></p>
        <p></p>
      </body>
      <Footer />
    </div>
  );
}


export default App;
