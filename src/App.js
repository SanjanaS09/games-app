import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './pages/Games.jsx';
import Game from './pages/Game.jsx';
import Charades from './pages/Charades.jsx';
import Words from './pages/Words.jsx';
import TicTacToe from './pages/TicTacToe.jsx';
import FourPicsOneWord from './pages/FourPicsOneWord.jsx';
import Pong from './pages/Pong.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/Games" element={<Games />} />
          <Route path="/Game" element={<Game />} />
          <Route
            path="*"
            element={
              <PageNotFound />
            }
          />
      <Route path="/Charades" element={<Charades />} />
      <Route path="/Words" element={<Words />} />
      <Route path="/TicTacToe" element={<TicTacToe />} />
      <Route path="/FourPicsOneWord" element ={<FourPicsOneWord />} />
      <Route path="/Pong" element={<Pong />} />
    </Routes>
    </Router>
  );
}

export default App;
