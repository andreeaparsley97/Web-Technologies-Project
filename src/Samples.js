import React from 'react';
import Navbar from './navbar';
import './Samples.css';
import PS3 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4571_web.jpg';
import Footer from './Footer';
class Samples extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <body className="image">
                    <div className="topleft">
                        <p>Logo</p>
                    </div>
                    <div className="middle">
                        <h1>COMING SOON</h1>
                        <hr></hr>
                        <p>35 days</p>
                    </div>
                    <div className="bottomleft">
                         <h1>Some text</h1>
                    </div>
                </body>
            </div>
        )
    }
}

export default Samples;