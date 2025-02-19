import "./hangman_drawing.css"
import { head, body, rightArm, leftArm, rightLeg, leftLeg} from './body_parts'

export default function HangmanDrawing () {
    return (
        <div className="drawing--container">
            {head}
            {body}
            {rightArm}
            {leftArm}
            {rightLeg}
            {leftLeg}
            <div className="drawing__gallow--rope" />
            <div className="drawing__gallow--bracket" />
            <div className="drawing__gallow--pole" />
            <div className="drawing__gallow--base" />
        </div>
    )
}