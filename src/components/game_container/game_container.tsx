import "./game_container.css"
import HangmanDrawing from "../hangman_drawing/hangman_drawing.tsx";
import HangmanWord from "../hangman_word/hangman_word.tsx";
import Keyboard from "../keyboard/keyboard";


export default function GameContainer () {
    return (
      <div className="game-container">
        <HangmanDrawing></HangmanDrawing>
        <HangmanWord></HangmanWord>
        <Keyboard></Keyboard>
      </div>
    );
}