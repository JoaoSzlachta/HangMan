import "./hangman_drawing.css"

export default function HangmanDrawing () {
    return (
        <div className="drawing--container">
            <div className="drawing__gallow--rope" />
            <div className="drawing__gallow--bracket" />
            <div className="drawing__gallow--pole" />
            <div className="drawing__gallow--base" />
        </div>
    )
}