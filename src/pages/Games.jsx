import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Games.css";
//import logo from "../assets/ettarra_logo.png"
import NHIE from "../assets/NHIE.png";
import WIMLT from "../assets/WIMLT.png";
import TOT from "../assets/TOT.png";

const Games = () => {


    const BackButton = (e) => {
        const timestamp = new Date();
        // Track successful login event
        window.gtag("event", `${e}_Click`, { 'timestamp': timestamp.toLocaleString(), "click": e });
        window.location.href = "/";
    };


    return (
        <div className="Games">
<div className='best-menu-container-top' onClick={() => BackButton('Back_Button')}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#291A02"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></div>
            <div className="GamesContainer">
                {/* <img src={logo} alt={logo} className="GamesLogo" /> */}
                <h1 className="GamesTitle">Ice Breakers</h1>
                <h2 className="GamesCoverTitle" >Never Have I Ever</h2>

                <Link to="/Game?Game=NHIE">
                    <img src={NHIE} alt="NHIE" className="GamesCover" />
                </Link>
                <h2 className="GamesCoverTitle" >Who Is Most Likely To</h2>

                <Link to="/Game?Game=WIMLT">
                    <img src={WIMLT} alt="WIMLT" className="GamesCover" />
                </Link>
                <h2 className="GamesCoverTitle" >This Or That</h2>

                <Link to="/Game?Game=TOT">
                    <img src={TOT} alt="TOT" className="GamesCover" />
                </Link>
                <h2 className="GamesCoverTitle" >Tic Tac Toe</h2>

                <Link to="/Game?Game=TTT">
                    <img src={TOT} alt="TTT" className="GamesCover" />
                </Link>
                <h2 className="GamesCoverTitle" >Match The Word</h2>

                <Link to="/Game?Game=MTW">
                    <img src={TOT} alt="MTW" className="GamesCover" />
                </Link>

                <h2 className="GamesCoverTitle" >Charades</h2>

                <Link to="/Game?Game=CH">
                    <img src={TOT} alt="CH" className="GamesCover" />
                </Link>

                <h2 className="GamesCoverTitle" >Four Picuture One Word</h2>

                <Link to="/Game?Game=CH">
                    <img src={TOT} alt="CH" className="GamesCover" />
                </Link>
            </div>
        </div>
    );

};

export default Games;