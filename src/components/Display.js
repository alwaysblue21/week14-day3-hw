import { useState } from "react";

function Display() {

const [score, setScore] = useState(0);

    return (
        <div>
        <h1>Welcome To Jeopardy!</h1>
        <h2>Score: {score}</h2>
        <section>
            <button onClick={() => setScore(score + 100)}>+</button>
            <button onClick={() => setScore(score - 100)}>-</button>
            <button onClick={() => setScore(0)}>Reset to zero</button>
        </section>

        </div>
    )
}

export default Display;