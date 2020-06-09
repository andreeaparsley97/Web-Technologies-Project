import React from 'react';
import Footer from "./Footer";
import Navbar from "./navbar";
import SIB from "./shadowsInBlue.jpg";
import { Helmet } from 'react-helmet';

const Title = "Hodge";


function App() {

  return (
    <div>
      <Helmet><title>{Title}</title></Helmet>
      <Navbar/>
      <div className="App">
        <body className="App-header" id="body_content">
          <a href="https://hodgebristol.bandcamp.com/album/shadows-in-blue">
            <img src={SIB} className="labelogo" alt="none"/>
          </a>
          <p></p>
          <p></p>
        </body>
        <Footer />
      </div>
    </div>
  );
}


export default App;
