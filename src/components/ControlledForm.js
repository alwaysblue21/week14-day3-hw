import { useState } from "react";

function ControlledForm(props) {

    const[formData, setFormData] = useState({
        randomQuestion: ""
    })

    const handleChange = (event) => {
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }

    const fetchQuestion = async (randomQuestion) => {
        const url = "http://jservice.io/api/random"
        const response = await fetch(url)

        const data = await response.json()
        props.setQuestion(data)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchQuestion(formData.randomQuestion)
        setFormData({randomQuestion: ""})

    }

    return (
        <div className="controlledForm">
           <form onSubmit={handleSubmit}>
           <h1>Question</h1>
                <button className="Question-Button"  name="randomQuestion" onClick={handleChange}>
                    Click For a New Question!
                </button>
           </form>
        </div>
    )
}

export default ControlledForm;