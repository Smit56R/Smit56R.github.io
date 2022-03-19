export default function IntroPage(props) {
    return (
        <div className="intro">
            <h3 className="intro--heading">Quizzical</h3>
            <p className="intro--desc">A Trivia Quiz</p>
            <button className="intro--button" onClick={props.startQuiz}>Start quiz</button>
        </div>
    )
}