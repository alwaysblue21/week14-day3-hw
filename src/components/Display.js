import { useState } from "react";

function Display(props) {

    const question = props.question

    const [score, setScore] = useState(0);

    const [hideAnswer, setHideAnswer] = useState(true)

    return (
        <div>
        <h1>Welcome To Jeopardy!</h1>
        <h2>Score: {score}</h2>
        <section>
            <button onClick={() => setScore(score + 100)}>+</button>
            <button onClick={() => setScore(score - 100)}>-</button>
            <button onClick={() => setScore(0)}>Reset to zero</button>
        </section>
        <h2>Let's Play!</h2>
        <section>
            <button>Get Question</button>
        </section>
        </div>
    )
}

export default Display;