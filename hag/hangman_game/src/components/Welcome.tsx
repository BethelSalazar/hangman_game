import React, { useState } from 'react';
import '../css/main.css';

interface WelcomeProps {
  startGame: (category: string) => void;
  categories: string[];
}

const Welcome: React.FC<WelcomeProps> = ({ startGame, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleStartGame = () => {
    if (selectedCategory) {
      startGame(selectedCategory);
      setGameStarted(true);
      setShowCategories(false);
    }
  };

  return (
    <div className="welcome-container">
      <div className="wrapper">
        <h1>Bienvenido al juego del ahorcado!!</h1>
        <h2>Juego Clásico</h2>
        {!selectedCategory && (
          <div className="category-dropdown">
            <button className="category-button" onClick={() => setShowCategories(!showCategories)}>
              Seleccionar Categoría
            </button>
            {showCategories && (
              <ul className="category-list">
                {categories.map((category) => (
                  <li key={category}>
                    <button className="category-option" onClick={() => setSelectedCategory(category)}>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {selectedCategory && !gameStarted && (
          <div className="start-game">
            <h4>Pista: {selectedCategory}</h4>
            <button className="start-button" onClick={handleStartGame}>Iniciar Juego</button>
          </div>
        )}
        {gameStarted && (
          <div className="game-in-progress">
            <h1>{gameWon ? '¡Ganaste!' : gameOver ? '¡Perdiste!' : ''}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;







