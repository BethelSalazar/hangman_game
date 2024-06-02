import React, { useState, useEffect } from 'react';
import im0 from '../img/img0.png';
import im1 from '../img/img1.png';
import im2 from '../img/img2.png';
import im3 from '../img/img3.png';
import im4 from '../img/img4.png';
import im5 from '../img/img5.png';
import im6 from '../img/img6.png';
import '../css/main.css';

interface HangmanProps {
  words: string[];
}

const Hangman: React.FC<HangmanProps> = ({ words }) => {
  const [selectedWord, setSelectedWord] = useState(words[0]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const displayWord = selectedWord.split('').map((letter) =>
    guessedLetters.includes(letter) ? letter : '_'
  ).join(' ');

  const handleGuess = (letter: string) => {
    if (!guessedLetters.includes(letter) && letter.match(/[a-z]/i)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!selectedWord.includes(letter)) {
        setErrorCount((prev) => prev + 1);
      }
    }
  };

  const restartGame = () => {
    const newWordIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordIndex];
    setSelectedWord(newWord);
    setGuessedLetters([]);
    setErrorCount(0);
    setElapsedTime(0);
  };

  const hangmanImages = [im0, im1, im2, im3, im4, im5, im6];
  const hangmanImage = hangmanImages[errorCount];

  return (
    <div className="hangman-container">
      <div className="elapsed-time">Tiempo transcurrido: {formatTime(elapsedTime)} segundos</div>
      <img className="hangman-image" src={hangmanImage} alt={`Hangman state ${errorCount}`} />
      <p className="word-display">{displayWord}</p>
      <input
        className="letter-input"
        maxLength={1}
        onChange={(e) => handleGuess(e.target.value.toLowerCase())}
        placeholder="Adivina una letra"
      />
      {(displayWord.split(' ').join('') === selectedWord || errorCount > 5) && (
        <button className="restart-button" onClick={restartGame}>Seleccionar Nueva Palabra</button>
      )}
      <p className="error-count">Cantidad de errores: {errorCount}</p>
      {displayWord.split(' ').join('') === selectedWord && (
        <p className="win-message">¡Ganaste esta ronda!</p>
      )}
    </div>
  );
};

export default Hangman;

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}
