import React from 'react'
import Navbar from "./navbar";
import labelogo from "./HTH121-Hodge____FB-COVER.jpg";
import pressShot3 from "./Pressshots2020/HNKC_200211_HODGE_PressShots-4175_web.jpg";
import pressShot4 from "./Pressshots2020/HNKC_200211_HODGE_PressShots-4531_web.jpg";
import pressShot6 from "./Pressshots2020/HNKC_200211_HODGE_PressShots-4577_web.jpg";
import Discography from "./discography";
import Footer from "./Footer";

export const LandingPage = () => {
    return (
        <div className="App">
            <Navbar className="navbar"/>
            <body className="App-header" id="body_content">
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
        </div>);
};

