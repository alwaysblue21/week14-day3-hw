import { useState } from "react";

function Display(props) {

    const question = props.question

    const [score, setScore] = useState(0);

    const [hideAnswer, setHideAnswer] = useState(true)

   if (question[0]) {
    return (
        <div className="Display">
            <div>
                <div className="Score">
                    <h1>Score: {score}</h1>
                    <div>
                        <button className="Score-Button" onClick={() => setScore(score + 100)}>+100 points!</button>
                        <button className="Score-Button" onClick={() => setScore(score - 100)}>-100 points!</button>
                        <button className="Reset_button" onClick={() => setScore(0)}>Reset Your SCore to 0!</button>
                    </div>
                </div>
            </div>

            <div className="Question-Body">
                <p>Question: {question[0].question}</p>
                <p>Category: {question[0].category.title}</p>
                <p>Points: {question[0].value}</p>
            </div>

        </div>
    )
   }
}

export default Display;