import React, { useState } from 'react';
import Hangman from "../src/components/Hangman";
import Welcome from "../src/components/Welcome";
import './css/main.css';

const categories = {
  frutas: ['manzana', 'sandia', 'fresas', 'naranjas', 'mandarinas', 'durazno', 'pera'],
  animales: ['ajolote', 'perro', 'gato', 'iguana', 'caballo', 'lobo', 'mariposa'],
  verduras: ['pepino', 'jitomate', 'tomate', 'cebolla', 'lechuga', 'chiles', 'cilantro'],
};

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const startGame = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      {!selectedCategory ? (
        <Welcome startGame={startGame} categories={Object.keys(categories)} />
      ) : (
        <Hangman words={categories[selectedCategory as keyof typeof categories]} />
      )}
    </div>
  );
}

export default App;

