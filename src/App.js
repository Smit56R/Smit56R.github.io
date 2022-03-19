import React from "react"
import IntroPage from "./components/IntroPage"
import QuizPage from "./components/QuizPage"
import Blob1 from "./images/blobs_1.svg"
import Blob2 from "./images/blobs_2.svg"

export default function App() {
    const [onStartPage, setOnStartPage] = React.useState(true)

    function startQuiz() {
        setOnStartPage(false)
    }

    return (
        <div>
            <img className="blob-1" src={Blob1} alt="blob-1" />
            {
                onStartPage ? <IntroPage startQuiz={startQuiz} /> :
                <QuizPage />
            }
            <img className="blob-2" src={Blob2} alt="blob-2" />
        </div>
    )
}