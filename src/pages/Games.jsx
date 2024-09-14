import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Games.css";

const Games = () => {

    const BackButton = (e) => {
        const timestamp = new Date();
        window.gtag("event", `${e}_Click`, { 'timestamp': timestamp.toLocaleString(), "click": e });
        window.location.href = "/";
    };

    return (
        <div className="Games">
            <div className='best-menu-container-top' onClick={() => BackButton('Back_Button')}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#291A02">
                    <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
            </div>
            
            {/* Game Title */}
            <h1 className="GamesTitle">Ice Breakers</h1>

            {/* Game Cards in Grid */}
            <div className="GamesContainer">
                <Link to="/Game?Game=NHIE">
                    <div className={`GameCard NHIE`}>Never Have I Ever</div>
                </Link>

                <Link to="/Game?Game=WIMLT">
                    <div className={`GameCard WIMLT`}>Who Is Most Likely To</div>
                </Link>

                <Link to="/Game?Game=TOT">
                    <div className={`GameCard TOT`}>This Or That</div>
                </Link>

                <Link to="/Game?Game=EQ">
                    <div className={`GameCard EQ`}>Emoji Quiz</div>
                </Link>

                <Link to="/Game?Game=MTW">
                    <div className={`GameCard MTW`}>Match The Word</div>
                </Link>

                <Link to="/Game?Game=CH">
                    <div className={`GameCard CH`}>Charades</div>
                </Link>

                <Link to="/TicTacToe">
                    <div className={`GameCard TicTacToe`}>Tic Tac Toe</div>
                </Link>

                <Link to="/FourPicsOneWord">
                    <div className={`GameCard FourPicsOneWord`}>Four Pictures One Word</div>
                </Link>
            </div>
        </div>
    );
};

export default Games;
