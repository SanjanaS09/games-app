import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

async function generateCharadesWord() {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Generate a random charades word Generate only the word eg Elephant ,Dubai, Chai   it could be a hindimovie, hindi words , object , animal etc");
    return result.response.text().trim();

}

// const Charades = useMemo(() => [
//     "cat",
//     "swimming",
//     "airplane",
//     "pizza",
//     "basketball",
//     "sun",
//     "singer",
//     "dancing",
//     "dog",
//     "doctor",
//     "football",
//     "phone",
//     "guitar",
//     "tree",
//     "burger",
//     "soccer",
//     "teacher",
//     "running",
//     "bird",
//     "piano",
//     "book",
//     "cake",
//     "coffee",
//     "barista",
//     "menu",
//     "police officer",
//     "tennis",
//     "cappuccino",
//     "jogging",
//     "elephant",
//     "waiter",
//     "mountain",
//     "latte",
//     "chef",
//     "singing",
//     "lion",
//     "car",
//     "fish",
//     "ice cream",
//     "pilot"
// ], []);


function Charades() {
    const [word, setWord] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    
    const generateRandomWord = async () => {
        setLoading(true);
        setError('');
    
        try {
            const generatedWord = await generateCharadesWord();
            setWord(generatedWord);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Charades Word</h1>
            <button onClick={generateRandomWord} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Word'}
            </button>
            {word && <h1>{word}</h1>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default Charades;
