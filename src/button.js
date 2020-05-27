import React from 'react';
import './App.css';

function Button() {

    return (
        <div>
            <button id ="test"
            className="App-link"
            href="https://polityrecords.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer">
                { window.onload = function () {
                  let test = document.getElementById("test");

                  test.addEventListener("mouseover", function(event) {
                  event.target.style.color = "black : blue";
    
                  setTimeout(function() {
                    event.target.style.color = "red : white";
                  }, 500);
                }, false);
                }}
                Visit Our Bandcamp
            </button>
        </div>
    )
}


export default Button;