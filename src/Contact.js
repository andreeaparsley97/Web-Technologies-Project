import React from 'react';
import pressShot3 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4175_web.jpg';
import pressShot4 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4531_web.jpg';
import pressShot6 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4577_web.jpg';
import './App.css';

class Contact extends React.Component {
    render() {
        return (
            <div id="cf">
                <img class="bottom" src={pressShot3} alt="none"/>
                <img class="top" src={pressShot4} alt="none"/>
                <img class="bottom" src={pressShot6} alt="none"/>
            </div>
        )
    }
}