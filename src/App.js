import React from 'react';
import labelogo from './HTH121-Hodge____FB-COVER.jpg'
import pressShot3 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4175_web.jpg';
import pressShot4 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4531_web.jpg';
import pressShot6 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4577_web.jpg';
import Footer from "./Footer";
import Button from './button';
import Navbar from "./navbar";
import Margin from "./margins";
import Discography from "./Discography";
import vid from "./HodgeVid.mp4";
import Contact from "./Contact";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="App">
     <Navbar className="navbar"/>
      <body className="App-header" id="body_content">
        {/*<Margin className="margins"/>*/}
        <a href="https://hodgebristol.bandcamp.com/album/shadows-in-blue">
          <img src = {labelogo} className="labelogo" alt="none"/>
        </a>
        <p></p>
        <p></p>
      </body>
      <Discography />
      <Footer />
    </div>
    </Router>
  );
}


export default App;
