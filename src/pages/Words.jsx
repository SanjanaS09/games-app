import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Words.css'

const Game = () => {

    const Words = useMemo(() => [
        "cat",
        "ice",
        "air",
        "key",
        "lime",
        "sun",
        "news",
        "night",
        "note",
        "out",
        "over",
        "phone",
        "paper",
        "pass",
        "pot",
        "shoe",
        "short",
        "shop",
        "shut",
        "step",
        "book",
        "sport",
        "some",
        "sweet",
        // "menu",
        // "police",
        // "tennis",
        // "cappuccino",
        // "jogging",
        // "elephant",
        // "waiter",
        // "mountain",
        // "latte",
        // "chef",
        // "singing",
        // "lion",
        // "car",
        // "fish",
        // "ice cream",
        // "pilot"
    ], []);

    const [sequence, setSequence] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);


    useEffect(() => {
        const randomSequence = Words.sort(() => Math.random() - 0.5);
        setSequence(randomSequence);
    });

    const handleNext = () => {
        if (currentIndex < sequence.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > -1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const renderCardContent = () => {
        if (currentIndex === -1) {
            return (
                <div className="instruction-card">
                    <h2>Welcome to the Ice Breakers!</h2>
                    <p>Press Next to start.</p>
                </div>
            );
        } else if (currentIndex >= sequence.length) {
            return (
                <div className="end-card">
                    <h2>Game Over!</h2>
                    <p>Thanks for playing.</p>
                </div>
            );
        } else {
            return <pre>{sequence[currentIndex]}</pre>;
        }
    };

    return (
        <div>
            <div className="game-container">
                {renderCardContent()}
            </div>
            <div className="navigation-buttons">
                <button onClick={handlePrevious} disabled={currentIndex <= -1} className='PreviousButton'>&lt;</button>
                <button onClick={handleNext} disabled={currentIndex >= sequence.length} className='NextButton'>&gt;</button>
            </div>
        </div>
    );
};

export default Game;
