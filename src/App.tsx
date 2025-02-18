import { useState } from "react";
import words from "./assets/wordList.json"
import Heading from './components/heading/heading.tsx'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <>
      <Heading />
    </>
  )
}

export default App
