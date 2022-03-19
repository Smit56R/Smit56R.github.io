import React from "react"
import Question from "./Question"
import { nanoid } from "nanoid"

export default function QuizPage() {
    const [questions, setQuestions] = React.useState([])
    const [checkAnswers, setCheckAnswers] = React.useState(false)
    const [playAgain, setPlayAgain] = React.useState(false)
    const [score, setScore] = React.useState(0)

    React.useEffect(() => {
        setScore(0)
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(
            res => res.json())
            .then(data => {
                const newArray = []
                for(let i = 0; i < 5; i++) {
                    newArray.push({
                        id: nanoid(),
                        question: decodeHtml(data.results[i].question),
                        correctAnswer: decodeHtml(data.results[i].correct_answer),
                        incorrectAnswers: data.results[i].incorrect_answers.map(text => decodeHtml(text))
                    })
                }
                //console.log(newArray)
                setQuestions(newArray)
            })
    }, [playAgain])

    const questionElements = questions.map(que => 
        <Question 
            key={que.id} 
            questionObj={que} 
            checkAnswers={checkAnswers} 
            incrementScore={incrementScore} 
        />
    )

    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function incrementScore() {
        setScore(prevScore => prevScore + 1)
    }

    function handleCheckAnswers() {
        setCheckAnswers(prevCheckAnswers => !prevCheckAnswers)
    }

    function handlePlayAgain() {
        setCheckAnswers(prevCheckAnswers => !prevCheckAnswers)
        setPlayAgain(prevPlayAgain => !prevPlayAgain)
    }

    return (
        <div className="quiz">
            {questionElements}
            {checkAnswers && <span className="quiz--result-text">You scored {score}/5 correct answers</span>}
            <button 
                className="quiz--button" 
                onClick={checkAnswers ? handlePlayAgain : handleCheckAnswers}
            >
                {checkAnswers ? "Play again" : "Check answers"}
            </button>
        </div>
    )
}