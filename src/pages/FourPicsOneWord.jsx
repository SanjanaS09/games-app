import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/FourPicsOneWord.css'

const App = () => {
  const navigate = useNavigate();

  const wordData = [
    {
      word: "BAT",
      images: [
        "https://images.pexels.com/photos/2587639/pexels-photo-2587639.jpeg?auto=compress&cs=tinysrgb&w=400",  // Animal
        "https://images.pexels.com/photos/185364/pexels-photo-185364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  // Sports equipment
        "https://images.pexels.com/photos/5415715/pexels-photo-5415715.jpeg?auto=compress&cs=tinysrgb&w=400",  // To hit
        "https://images.pexels.com/photos/159550/baseball-foul-ball-hit-baseball-bat-159550.jpeg?auto=compress&cs=tinysrgb&w=400",  // Flying
      ],
    },
    {
      word: "BANK",
      images: [
        "https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=400",  // Financial institution
        "https://images.pexels.com/photos/219693/pexels-photo-219693.jpeg?auto=compress&cs=tinysrgb&w=400",  // Side of a river
        "https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&w=400",  // Financial
        "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=400",  // Financial
      ],
    },
    {
      word: "BARK",
      images: [
        "https://images.pexels.com/photos/6711834/pexels-photo-6711834.jpeg?auto=compress&cs=tinysrgb&w=400",  // Sound a dog makes
        "https://images.pexels.com/photos/14494660/pexels-photo-14494660.jpeg?auto=compress&cs=tinysrgb&w=400",  // Outer covering of a tree
        "https://images.pexels.com/photos/28397743/pexels-photo-28397743/free-photo-of-olympus-digital-camera.jpeg?auto=compress&cs=tinysrgb&w=400",  // To speak sharply
        "https://images.pexels.com/photos/3042579/pexels-photo-3042579.jpeg?auto=compress&cs=tinysrgb&w=400",  // Sound
      ],
    },
    {
      word: "RING",
      images: [
        "https://images.pexels.com/photos/157554/pexels-photo-157554.jpeg?auto=compress&cs=tinysrgb&w=400",  // Jewelry
        "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=400",  // Sound of a bell
        "https://images.pexels.com/photos/18386859/pexels-photo-18386859/free-photo-of-smartphone-and-coffee-on-table.jpeg?auto=compress&cs=tinysrgb&w=400",  // Smartphone notification
        "https://images.pexels.com/photos/674248/pexels-photo-674248.jpeg?auto=compress&cs=tinysrgb&w=400",  // Group of people
      ],
    },
    {
      word: "MINT",
      images: [
        "https://images.pexels.com/photos/1264000/pexels-photo-1264000.jpeg?auto=compress&cs=tinysrgb&w=400",  // Plant
        "https://images.pexels.com/photos/4457151/pexels-photo-4457151.jpeg?auto=compress&cs=tinysrgb&w=400",  // To produce coins
        "https://images.pexels.com/photos/4465125/pexels-photo-4465125.jpeg?auto=compress&cs=tinysrgb&w=400",  // Freshness
        "https://images.pexels.com/photos/1289363/pexels-photo-1289363.jpeg?auto=compress&cs=tinysrgb&w=400Leaf.jpg",  // Flavor
      ],
    },
    {
      word: "NAIL",
      images: [
        "https://images.pexels.com/photos/16683304/pexels-photo-16683304/free-photo-of-woman-holding-mortarboard.jpeg?auto=compress&cs=tinysrgb&w=400",  // Movement of the sea
        "https://images.pexels.com/photos/3557600/pexels-photo-3557600.jpeg?auto=compress&cs=tinysrgb&w=400",  // To move hand
        "https://images.pexels.com/photos/190101/pexels-photo-190101.jpeg?auto=compress&cs=tinysrgb&w=400",  // Surface waves
        "https://images.pexels.com/photos/7714894/pexels-photo-7714894.jpeg?auto=compress&cs=tinysrgb&w=400",  // Greeting
      ],
    },
    {
      word: "LIGHT",
      images: [
        "https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&w=400",  // Illumination
        "https://images.pexels.com/photos/1330029/pexels-photo-1330029.jpeg?auto=compress&cs=tinysrgb&w=400",  // Not heavy
        "https://images.pexels.com/photos/65590/sparks-fireworks-welding-industrial-65590.jpeg?auto=compress&cs=tinysrgb&w=400",  // To ignite
        "https://images.pexels.com/photos/6872151/pexels-photo-6872151.jpeg?auto=compress&cs=tinysrgb&w=400",  // Refraction
      ],
    },
    {
      word: "DRAW",
      images: [
        "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400",  // To produce a picture
        "https://images.pexels.com/photos/5699376/pexels-photo-5699376.jpeg?auto=compress&cs=tinysrgb&w=400",  // To pull something
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0FWze9aNDvgjc4HPoZXjsr6A4bMuXrcG7g&s",  // Draw in a game
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafOE9ozwT-ofJCC1BMLf5CXfatwwfqvsOZQ&s",  // Academic drawing
      ],
    },
    {
      word: "CRANE",
      images: [
        "https://images.pexels.com/photos/624061/pexels-photo-624061.jpeg?auto=compress&cs=tinysrgb&w=400",  // Bird
        "https://images.pexels.com/photos/259870/pexels-photo-259870.jpeg?auto=compress&cs=tinysrgb&w=400",  // Machine
        "https://images.pexels.com/photos/25525975/pexels-photo-25525975/free-photo-of-man-controlling-camcorder-on-crane.jpeg?auto=compress&cs=tinysrgb&w=400",  // Camera equipment
        "https://images.pexels.com/photos/18499286/pexels-photo-18499286/free-photo-of-sunset-crane.jpeg?auto=compress&cs=tinysrgb&w=400",  // Movement
      ],
    },
    {
      word: "SCALE",
      images: [
        "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=400",  // Weighing device
        "https://images.pexels.com/photos/3338498/pexels-photo-3338498.jpeg?auto=compress&cs=tinysrgb&w=400",  // Outer covering of fish
        "https://images.pexels.com/photos/17653245/pexels-photo-17653245/free-photo-of-man-climbing-on-stony-wall.jpeg?auto=compress&cs=tinysrgb&w=400",  // To climb
        "https://images.pexels.com/photos/3988555/pexels-photo-3988555.jpeg?auto=compress&cs=tinysrgb&w=400",  // Measurement tool
      ],
    },
    {
      word: "LEAD",
      images: [
        "https://images.pexels.com/photos/290150/pexels-photo-290150.jpeg?auto=compress&cs=tinysrgb&w=400",  // Metal
        "https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?auto=compress&cs=tinysrgb&w=400",  // To guide
        "https://images.pexels.com/photos/1237647/pexels-photo-1237647.jpeg?auto=compress&cs=tinysrgb&w=400",  // Chemistry
        "https://www.vedantu.com/seo/content-images/099b2dc1-637a-4ad4-bc8f-3524bdec60ab.png",  // Projectiles
      ],
    },
    {
      word: "CHARGE",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/%CE%88%CF%86%CE%BF%CE%B4%CE%BF%CF%82.jpg/220px-%CE%88%CF%86%CE%BF%CE%B4%CE%BF%CF%82.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GdAB52tjPk4dyufeyfNRTXewcF2_zVwWCA&s",  // To become exhausted
        "https://pyxis.nymag.com/v1/imgs/195/828/feee94c1a8e831ae5fc0969648550131ac-01-battery-charge-50.rsquare.w400.jpg",  // Wear and tear
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldrjubtgmNLICdOQPEgv5GNjU4lqCLg5Mdg&s",  // Tread pattern
      ],
    },
    {
      word: "TRACK",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIW5Rfn2YUztuoeYJV_TdsPxTVE22RkLotQ&s",  // Path or trail
        "https://images.pexels.com/photos/1127120/pexels-photo-1127120.jpeg?auto=compress&cs=tinysrgb&w=400",  // Recording
        "https://images.pexels.com/photos/6823392/pexels-photo-6823392.jpeg?auto=compress&cs=tinysrgb&w=400",  // Monitoring
        "https://images.pexels.com/photos/552779/pexels-photo-552779.jpeg?auto=compress&cs=tinysrgb&w=400",  // Sports track
      ],
    },
    {
      word: "PITCH",
      images: [
        "https://www.earmaster.com/images/book/m10941/m10941.id165806.png",
        "https://fcbusiness.co.uk/wp-content/uploads/2018/01/MWC-5633-Pitch-Grading-Framework.jpeg",  
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89gxBKr0zj2cTkGZSy93dp-7jXdAkkXnKHw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94goe6TNj_0KyOiDugZ4ALqxSeObBvu4qxg&s",
      ],
    },
    
    {
      word: "ADDRESS",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4X9sTyQRXRJYghCxA9eTehJ8jTplhx1-DZw&s",  // Location
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrB6CWBS1OrCqQUal_D_jckMSig48oIDf5_g&s",  // To speak
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqvqOP31vjKTQ6jX4eFCzzRlO5j9ZspIWdQ&s",  // Contact information
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1sn-cQMw7tK3a23mpxTSRF1LTUq_2I56AA&s",  // Envelope
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); 
  const [userInput, setUserInput] = useState(""); 
  const [letterStatus, setLetterStatus] = useState([]); 
  const [showWelcome, setShowWelcome] = React.useState(true);
  const currentWord = wordData[currentIndex].word;
  const currentImages = wordData[currentIndex].images;

  
  useEffect(() => {
    setLetterStatus(currentWord.split('').map(() => '')); 
    setUserInput(''); 
  }, [currentIndex, currentWord]);

  const handleLetterChange = (index, letter) => {
    const newStatus = [...letterStatus];
    const newUserInput = userInput.split('');
    newUserInput[index] = letter;
    setUserInput(newUserInput.join(''));

    if (letter.toUpperCase() === currentWord[index]) {
      newStatus[index] = 'correct';
    } else {
      newStatus[index] = 'incorrect';
    }
    setLetterStatus(newStatus);
  };

  const nextWord = () => {
    setLetterStatus([]);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wordData.length); 
  };

  const handleExit = () => {
    navigate('/Games'); 
  };

  const WelcomePage = ({ onStart }) => (
    <div className="welcomeFPOW-page">
      <div className="welcome-header">
        <h1>Welcome to Four Pics One Word!</h1>
      </div>
      <p className="instructions">
      Look at the four pictures. They all share a common word. Guess the word that describes all four images.
      </p>
      <button className="button" onClick={onStart}>Start Game</button>
    </div>
  );
  const handleStart = () => {
    setShowWelcome(false);
  };

  return (
    <div className="FPOW-container">
      <button className="exit-button" onClick={handleExit}>X</button>
      {showWelcome ? (
        <WelcomePage onStart={handleStart} />
      ) : (
        <>
      <div className="FPOW-card">
        <div style={{ textAlign: "center" }}>

          <div className="image-grid"> 
            {currentImages.map((img, index) => (
              <img key={index} src={img} alt={`pic-${index}`} style={{ width: "150px", height: "150px" }} />
            ))}
          </div>

          <div style={{ margin: "20px" }}>
            {currentWord.split('').map((letter, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={userInput[index] || ''} 
                onChange={(e) => handleLetterChange(index, e.target.value)}
                style={{
                  width: "20px",
                  color: "#FFF4E6",
                  height: "40px",
                  textAlign: "center",
                  fontSize: "24px",
                  margin: "5px",
                  border: "none", 
                  background: "none", 
                  outline: "none", 
                  borderBottom: "2px solid #FFF4E6", 
                }}
                onKeyUp={(e) => {
                  if (e.target.value.length === 1) {
                    const nextSibling = document.querySelector(`input[name="letter-${index + 1}"]`);
                    if (nextSibling) {
                      nextSibling.focus();
                    }
                  }
                }}
                name={`letter-${index}`}
              />
            ))}

          </div>

          <div>
            {letterStatus.every((status, index) => status === 'correct') && (
              <div>
                <h2 style={{ color: "#FFF4E6" }}>Correct! The word is {currentWord}</h2>
                <button className = 'next-word' onClick={nextWord} >
                  Next Word
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default App;
