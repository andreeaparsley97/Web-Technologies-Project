import React from 'react';
import './App.css';
import './footer.css';

function Footer() {
    return (
        <footer className = "Footer">
            <div className="wrapper">
            <div className="footer-border"></div>
            <div className="footer-masthead">
                <p></p>
                <p></p>
            </div>
            <div className="footer-nav">
                <a href="#">Info</a>
                <a href="#">Discography</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
            </div>
            </div>
        </footer>    
    )
}

export default Footer;