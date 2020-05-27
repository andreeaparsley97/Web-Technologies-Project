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

function App() {

  return (
    <div className="App">
     <Navbar className="navbar"/>
      <body className="App-header" id="body_content">
        {/*<Margin className="margins"/>*/}
        <a href="https://hodgebristol.bandcamp.com/album/shadows-in-blue">
          <img src = {labelogo} className="Label-Logo" alt="none"/>
        </a>
        <div id="cf">
          <img class="bottom" src={pressShot3} alt="none"/>
          <img class="top" src={pressShot4} alt="none"/>
          <img class="bottom" src={pressShot6} alt="none"/>
        </div>
        <p></p>
        <p></p>
      </body>
      <Discography />
      <Footer />
    </div>
  );
}


export default App;
