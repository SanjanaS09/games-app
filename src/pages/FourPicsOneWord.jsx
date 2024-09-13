import React, { useState, useEffect } from "react";

const App = () => {
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Barking_up_the_wrong_tree.jpg/800px-Barking_up_the_wrong_tree.jpg",  // To speak sharply
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bark_Bark_Bark.jpg/800px-Bark_Bark_Bark.jpg",  // Sound
      ],
    },
    {
      word: "RING",
      images: [
        "https://images.pexels.com/photos/157554/pexels-photo-157554.jpeg?auto=compress&cs=tinysrgb&w=400",  // Jewelry
        "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=400",  // Sound of a bell
        "https://images.pexels.com/photos/18386859/pexels-photo-18386859/free-photo-of-smartphone-and-coffee-on-table.jpeg?auto=compress&cs=tinysrgb&w=400",  // Smartphone notification
        "https://images.pexels.com/photos/1050312/pexels-photo-1050312.jpeg?auto=compress&cs=tinysrgb&w=400",  // Group of people
      ],
    },
    {
      word: "MINT",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Mint_plant.jpg/800px-Mint_plant.jpg",  // Plant
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Mint_Factory.jpg/800px-Mint_Factory.jpg",  // To produce coins
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Fresh_Mint.jpg/800px-Fresh_Mint.jpg",  // Freshness
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mint_Leaf.jpg/800px-Mint_Leaf.jpg",  // Flavor
      ],
    },
    {
      word: "WAVE",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ocean_wave.jpg/800px-Ocean_wave.jpg",  // Movement of the sea
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Hand_wave.jpg/800px-Hand_wave.jpg",  // To move hand
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Beach_wave.jpg/800px-Beach_wave.jpg",  // Surface waves
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Goodbye_wave.jpg/800px-Goodbye_wave.jpg",  // Greeting
      ],
    },
    {
      word: "LIGHT",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Light_bulb.jpg/800px-Light_bulb.jpg",  // Illumination
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Lightweight_luggage.jpg/800px-Lightweight_luggage.jpg",  // Not heavy
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Flame_light.jpg/800px-Flame_light.jpg",  // To ignite
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Light_refraction.jpg/800px-Light_refraction.jpg",  // Refraction
      ],
    },
    {
      word: "DRAW",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Drawn_pencil.jpg/800px-Drawn_pencil.jpg",  // To produce a picture
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Draw_curtain.jpg/800px-Draw_curtain.jpg",  // To pull something
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Draw_game.jpg/800px-Draw_game.jpg",  // Draw in a game
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Draw_student.jpg/800px-Draw_student.jpg",  // Academic drawing
      ],
    },
    {
      word: "TIRE",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tire.jpg/800px-Tire.jpg",  // Rubber covering of a wheel
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Tired_person.jpg/800px-Tired_person.jpg",  // To become exhausted
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Worn_tire.jpg/800px-Worn_tire.jpg",  // Wear and tear
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tire_tread.jpg/800px-Tire_tread.jpg",  // Tread pattern
      ],
    },
    {
      word: "CRANE",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Crane_bird.jpg/800px-Crane_bird.jpg",  // Bird
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Crane_construction.jpg/800px-Crane_construction.jpg",  // Machine
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Camera_crane.jpg/800px-Camera_crane.jpg",  // Camera equipment
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Crane_movement.jpg/800px-Crane_movement.jpg",  // Movement
      ],
    },
    {
      word: "SCALE",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Scale.jpg/800px-Scale.jpg",  // Weighing device
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Fish_scale.jpg/800px-Fish_scale.jpg",  // Outer covering of fish
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Scale_climb.jpg/800px-Scale_climb.jpg",  // To climb
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Scale_tool.jpg/800px-Scale_tool.jpg",  // Measurement tool
      ],
    },
    {
      word: "TRACK",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Train_track.jpg/800px-Train_track.jpg",  // Path or trail
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Recording_track.jpg/800px-Recording_track.jpg",  // Recording
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tracking_software.jpg/800px-Tracking_software.jpg",  // Monitoring
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Running_track.jpg/800px-Running_track.jpg",  // Sports track
      ],
    },
    {
      word: "YARD",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Yard_measurement.jpg/800px-Yard_measurement.jpg",  // Unit of measurement
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Backyard.jpg/800px-Backyard.jpg",  // Piece of land
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Yard_garden.jpg/800px-Yard_garden.jpg",  // Garden
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yard_sale.jpg/800px-Yard_sale.jpg",  // Sale
      ],
    },
    {
      word: "LEAD",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Lead_metal.jpg/800px-Lead_metal.jpg",  // Metal
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lead_person.jpg/800px-Lead_person.jpg",  // To guide
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Lead_chemistry.jpg/800px-Lead_chemistry.jpg",  // Chemistry
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Lead_shot.jpg/800px-Lead_shot.jpg",  // Projectiles
      ],
    },
    {
      word: "ADDRESS",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Address_label.jpg/800px-Address_label.jpg",  // Location
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Speech_address.jpg/800px-Speech_address.jpg",  // To speak
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Address_book.jpg/800px-Address_book.jpg",  // Contact information
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Address_Envelope.jpg/800px-Address_Envelope.jpg",  // Envelope
      ],
    },
  ];
    
  const [currentIndex, setCurrentIndex] = useState(0); // Track current word index
  const [userInput, setUserInput] = useState(""); // Track user input
  const [letterStatus, setLetterStatus] = useState([]); // Track letter status

  const currentWord = wordData[currentIndex].word;
  const currentImages = wordData[currentIndex].images;

  // Initialize letter status and user input when word changes
  useEffect(() => {
    setLetterStatus(currentWord.split('').map(() => '')); // Empty strings for initial status
    setUserInput(''); // Clear user input
  }, [currentIndex, currentWord]);

  // Function to handle letter input
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

  // Function to go to the next word
  const nextWord = () => {
    setLetterStatus([]); // Reset letter status
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wordData.length); // Move to next word
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>4 Pics 1 Word Game</h1>

      {/* Image Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", justifyContent: "center" }}>
        {currentImages.map((img, index) => (
          <img key={index} src={img} alt={`pic-${index}`} style={{ width: "150px", height: "150px" }} />
        ))}
      </div>

      {/* Letter Boxes */}
      <div style={{ margin: "20px" }}>
        {currentWord.split('').map((letter, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={userInput[index] || ''} // Bind input value to userInput
            onChange={(e) => handleLetterChange(index, e.target.value)}
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
              fontSize: "24px",
              margin: "5px",
              border: `2px solid ${letterStatus[index] === 'correct' ? 'green' : letterStatus[index] === 'incorrect' ? 'red' : 'gray'}`,
              boxSizing: "border-box",
            }}
          />
        ))}
      </div>

      {/* Result */}
      <div>
        {letterStatus.every((status, index) => status === 'correct') && (
          <div>
            <h2 style={{ color: "green" }}>Correct! The word is {currentWord}</h2>
            <button onClick={nextWord} style={{ padding: "10px 20px", fontSize: "16px", marginTop: "10px" }}>
              Next Word
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
