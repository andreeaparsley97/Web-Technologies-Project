import React from 'react';
import './App.css';
import './footer.css';
import Logo from './htoothLogo.svg';

function Footer() {
    return (
        <footer className = "Footer">
            <div className="wrapper">
                <div className="footer-border"></div>
                <div className="footer-masthead">
                    <img src={Logo} alt="none"></img>
                    <p>Copyright Hodge 2020</p>
                </div>
                <div className="footer-nav">
                    <a href="http://poly.am/contact.html">Info</a>
                    <a href="/Login">Login</a>
                    <a href="https://twitter.com/Hodgebristol?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>
                    <a href="https://www.facebook.com/Hodgebristol/">Facebook</a>
                    <a href="https://www.instagram.com/hodgebristol/?hl=en">Instagram</a>
                </div>
            </div>
        </footer>    
    )
}

export default Footer;