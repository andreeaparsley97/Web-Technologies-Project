import React from 'react';
import Navbar from "./navbar";
import './App.css';
import './discography.css';
import hotline from "./Hotline5.jpg";
import amorfati from "./amorfatiscaled.jpeg";
import renegades from "./renegades.jpeg";
import resolve from "./resolve.jpeg";

function Discography () {
    return (
        <div className="section">
            <div id="page" className="content">
            <div className="top-border"></div>
                <section className="wrapper">
                    <section className="artwork">
                        <img src={resolve}/>
                        ::before;
                        <br></br>
                        <div className="caption"><h3>Vinyl - OCT 2014</h3></div>
                    </section>
                    <section className = "main">
                        <div className="title"><h1>Hodge</h1></div>
                        <div className="release-name"><h1>Resolve / Prototype Fear</h1></div>
                        <div className="tab">
                            <input id="tab-16" name="tab" type="checkbox"></input>
                            <label for="tab-16">
                                Listen / Buy Digital
                            </label>
                            <div className="tab-content">
                            <iframe className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3428843583/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hodgebristol.bandcamp.com/album/resolve-prototype-fear">Resolve / Prototype Fear by Hodge</a></iframe>
                            </div>
                        </div>
                    </section>
                </section>
                <div className="bottom-border"></div>
            <div className="top-border"></div>
                <section className="wrapper">
                    <section className="artwork">
                        <img src={renegades}/>
                        <br></br>
                        <div className="caption"><h3>Vinyl - OCT 2014</h3></div>
                    </section>
                    <section className = "main">
                        <div className="title"><h1>Hodge</h1></div>
                        <div className="release-name"><h1>Amor Fati / Renegades</h1></div>
                        <div className="tab">
                            <input id="tab-17" name="tab" type="checkbox"></input>
                            <label for="tab-17">
                                Listen / Buy Digital
                            </label>
                            <div className="tab-content">
                            <iframe className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=1103287883/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hodgebristol.bandcamp.com/album/amor-fati-renegades">Amor Fati / Renegades by Hodge</a></iframe>
                            </div>
                        </div>
                    </section>
                </section>
                <div className="bottom-border"></div>
                <div className="top-border"></div>
                <section className="wrapper">
                    <section className="artwork">
                        <img src={hotline}/>
                        <br></br>
                        <div className="caption"><h3>Vinyl - OCT 2014</h3></div>
                    </section>
                    <section className = "main">
                        <div className="title"><h1>Hodge</h1></div>
                        <div className="release-name"><h1>Mind Games / Flashback</h1></div>
                        <div className="tab">
                            <input id="tab-19" name="tab" type="checkbox"></input>
                            <label for="tab-19">
                                Listen / Buy Digital
                            </label>
                            <div className="tab-content">
                                <iframe className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=3497402750/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hodgebristol.bandcamp.com/album/hodge-mind-games-flashback">Hodge - Mind Games / Flashback by Hodge</a></iframe>
                            </div>
                        </div>
                    </section>
                </section>
                <div className="bottom-border"></div>
                <div className="top-border"></div>
                <section className="wrapper">
                    <section className="artwork">
                        <img src={amorfati}/>
                        <br></br>
                        <div className="caption"><h3>Vinyl - OCT 2014</h3></div>
                    </section>
                    <section className = "main">
                        <div className="title"><h1>Hodge / Peverelist</h1></div>
                        <div className="release-name"><h1>Amor Fati (Peverelist remix) / Tilikum (Hodge remix)</h1></div>
                        <div className="tab">
                            <input id="tab-18" name="tab" type="checkbox"></input>
                            <label for="tab-18">
                                Listen / Buy Digital
                            </label>
                            <div className="tab-content">
                            <iframe className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=2392731533/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://hodgebristol.bandcamp.com/album/amor-fati-peverelist-remix-tilikum-hodge-remix">Amor Fati (Peverelist remix) / Tilikum (Hodge remix) by Hodge</a></iframe>
                            </div>
                        </div>
                    </section>
                </section>
                <div className="bottom-border"></div>
            </div>
        </div>
    )
}

export default Discography;