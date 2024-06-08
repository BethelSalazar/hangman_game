# Juego del Ahorcado
El Juego del Ahorcado es una aplicación web desarrollada en React que te permite jugar el clásico juego del ahorcado. El objetivo es adivinar una palabra oculta antes de que se completen todas las partes del ahorcado.

# Características
Selección de Categorías: Elige entre diferentes categorías de palabras para jugar, como frutas, animales, verduras, etc.
Pistas y Ayudas: Obtén pistas sobre la categoría de la palabra a adivinar antes de comenzar cada ronda.
Temporizador: Visualiza el tiempo transcurrido mientras juegas cada partida.
Interfaz Amigable: Diseño atractivo y fácil de usar para una experiencia de juego cómoda.
Gestión de Errores: Control de errores al ingresar letras incorrectas durante el juego.
Reinicio y Nuevas Palabras: Reinicia el juego para una nueva partida y selecciona una nueva palabra al azar.

# Estructura del Proyecto
````
|-- public/
|-- src/
|   |-- components/
|   |   |-- Hangman.tsx
|   |   |-- Welcome.tsx
|   |-- css/
|   |   |-- main.css
|   |-- img/
|   |   |-- img0.png
|   |   |-- img1.png
|   |   |-- ...
|   |-- App.tsx
|   |-- index.tsx
|-- README.md
|-- package.json

````

public/: Contiene archivos estáticos para la construcción del sitio web.
src/: Directorio principal de código fuente.
components/: Componentes React, incluyendo el juego principal (Hangman) y la pantalla de bienvenida (Welcome).
css/: Estilos CSS para personalizar la apariencia de la aplicación.
img/: Imágenes utilizadas en la aplicación, incluyendo las partes del ahorcado.
App.tsx: Componente principal que renderiza la aplicación.
index.tsx: Archivo de entrada de React.


# Cómo Ejecutar
Clona este repositorio: git clone https://github.com/BethelSalazar/hangman_game.git
Instala las dependencias: npm install
Inicia la aplicación: npm start
Abre tu navegador y visita http://localhost:5173 para jugar.
