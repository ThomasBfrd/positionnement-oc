import React, { useState, useEffect } from 'react';
import '../styles/css/game.css'
import dice1 from '../medias/dice/dice-1.png';
import dice2 from '../medias/dice/dice-2.png';
import dice3 from '../medias/dice/dice-3.png';
import dice4 from '../medias/dice/dice-4.png';
import dice5 from '../medias/dice/dice-5.png';
import dice6 from '../medias/dice/dice-6.png';

const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6
};

const titleGame = 'Le jeu du dé'

const Game = () => {
  const [scores, setScores] = useState([0, 0]);
  const [activePlayer, setActivePlayer] = useState(0);
  const [currentScores, setCurrentScores] = useState([0, 0]);
  const [playing, setPlaying] = useState(false);
  const diceEl = 0;

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setScores([0, 0]);
    setCurrentScores([0, 0]);
    setActivePlayer(0);
    setPlaying(true);

    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.querySelector('.result').textContent = ``

    const player0El = document.querySelector('.player--0');
    const player1El = document.querySelector('.player--1');
    const diceEl = document.querySelector('.dice');

    diceEl.classList.add('hidden');
    document.querySelector('.main__game').classList.remove('player--winner');
    document.querySelector('.rules').style.color = 'black'
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  };

  const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    setCurrentScores(prevCurrentScores => {
      const newCurrentScores = [...prevCurrentScores];
      newCurrentScores[activePlayer] = 0;
      return newCurrentScores;
    });
  
    setActivePlayer(activePlayer === 0 ? 1 : 0);

    const player0El = document.querySelector('.player--0');
    const player1El = document.querySelector('.player--1');

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };

  const rollDice = () => {
    if (playing) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      const diceEl = document.querySelector('.dice');
  
      diceEl.classList.remove('hidden');
      diceEl.src = diceImages[dice];
  
      if (dice !== 1) {
        setCurrentScores(prevCurrentScores => {
          const newCurrentScores = [...prevCurrentScores];
          newCurrentScores[activePlayer] += dice;
          return newCurrentScores;
        });
        document.getElementById(`current--${activePlayer}`).textContent = currentScores[activePlayer] + dice;
      } else {
        switchPlayer();
      }
    }
  };

  const holdScore = () => {
    if (playing) {
      const newScores = [...scores];
      newScores[activePlayer] += currentScores[activePlayer];
  
      setScores(newScores);
      document.getElementById(`score--${activePlayer}`).textContent = newScores[activePlayer];
  
      if (newScores[activePlayer] >= 10) {
        setPlaying(false);
        document.querySelector('.dice').classList.add('hidden');
        const playerEl = document.querySelector(`.player--${activePlayer}`);
        document.querySelector('.main__game').classList.add('player--winner');
        document.querySelector('.rules').style.color = 'white'
        playerEl.classList.remove('player--active');
        document.querySelector('.result').textContent = `Joueur ${activePlayer + 1} a gagné !`
      } else {
        setCurrentScores(prevCurrentScores => {
          const newCurrentScores = [...prevCurrentScores];
          newCurrentScores[activePlayer] = 0;
          return newCurrentScores;
        });
        switchPlayer();
      }
    }
  };

  const resetGame = () => {
    init();
  };

  return (
    <div className="main__game" id="game">
      <div className='rules'>
      <h1>{titleGame.toUpperCase()}</h1>
      <p className='rules__p'>Chacun son tour, le joueur actif doit lancer le dé. Le but est d'avoir 50 points. 
      Si un joueur tombe sur la face 1, alors il passe son tour sans récupérer de points. 
      Si un joueur maintient son score de lancés, alors il cumule les points</p>
      </div>
      
      <section className={`player player--0 ${activePlayer === 0 ? 'player--active' : ''}`}>
        <h2 className="name" id="name--0">Joueur 1</h2>
        <p className="score" id="score--0">{scores[0]}</p>
        <div className="current">
          <p className="current-label">Score actuel</p>
          <p className="current-score" id="current--0">{currentScores[0]}</p>
        </div>
      </section>
      <section className={`player player--1 ${activePlayer === 1 ? 'player--active' : ''}`}>
        <h2 className="name" id="name--1">Joueur 2</h2>
        <p className="score" id="score--1">{scores[1]}</p>
        <div className="current">
          <p className="current-label">Score actuel</p>
          <p className="current-score" id="current--1">{currentScores[1]}</p>
        </div>
      </section>

      <img src={diceEl} alt="Playing dice" className="dice hidden" />
      <p className='result'></p>
      <div className="btn-display">
        <button className="btn btn--new" onClick={resetGame}>🔄 Nouvelle partie</button>
        <button className="btn btn--roll" onClick={rollDice}>🎲 Lancer le dé</button>
        <button className="btn btn--hold" onClick={holdScore}>📥 Maintenir score</button>
      </div>
    </div>
  );
};

export default Game;
