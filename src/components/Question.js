import React from "react"
import Option from "./Option"
import { nanoid } from 'nanoid'

export default function Question(props) {
    let optArray = [...props.questionObj.incorrectAnswers]
    const indexOfCorrectAnswer = Math.floor(Math.random() * 2)
    optArray.splice(indexOfCorrectAnswer, 0, props.questionObj.correctAnswer)
    optArray = optArray.map((option, index) => (
        {
            id: nanoid(),
            text: option,
            isCorrect: index === indexOfCorrectAnswer ? true : false,
            isSelected: false
        }
    ))
    const [options, setOptions] = React.useState(optArray)

    function toggleOption(id) {
        setOptions(prevOptions => prevOptions.map(opt => (
            id === opt.id ? {...opt, isSelected: !opt.isSelected} : {...opt, isSelected: false}
        )))
    }

    function calculateScore() {
        for(let i = 0; i < 4; i++) {
            if(options[i].isSelected && options[i].isCorrect) {
                props.incrementScore()
            }
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => calculateScore(), [props.checkAnswers])

    const optionElements = options.map(
            opt => 
            <Option 
                key={opt.id} 
                optionObj={opt} 
                toggleOption={toggleOption} 
                checkAnswers={props.checkAnswers} 
            />
        )

    return (
        <div className="question">
            <p>{props.questionObj.question}</p>
            <div className="options">
                {optionElements}
            </div>
            <hr />
        </div>
    )
}