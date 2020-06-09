import React from 'react';
import Navbar from './navbar';
import './Samples.css';
import DateCountdown from 'react-date-countdown-timer'
import vinepic from './vinepic.jpg'

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
                        <h4>COMING SOON</h4>
                        <DateCountdown id="counter" dateTo='June 29, 2020 00:00:00 GMT'/>
                    </div>
                    <div className="bottomleft">
                    </div>
                </body>
            </div>
        )
    }
}

export default Samples;