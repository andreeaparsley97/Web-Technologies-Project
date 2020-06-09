import './Contact.css';
import React from 'react';
import PS3 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4175_web.jpg';
import PS4 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4531_web.jpg';
import PS2 from './Pressshots2020/HNKC_200211_HODGE_PressShots-4061_web.jpg';
import './App.css';
import Navbar from './navbar';
import Footer from './Footer';
class Contact extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
            <div className="contact">
                    <div id="cf">
                        <img src={PS3} alt="none" className="bottom"></img>
                        <img src={PS2} alt="none" className="top"></img>
                        <img src={PS4} alt="none" className="bottom"></img>
                    </div>
                    <h1 className="bottom-left">Contact: hodgebristol@gmail.com</h1>
                    <h1 className="bottom-right">Bookings: kim@poly.am</h1>
            </div>
            </div>
        )
    };
}

export default Contact;