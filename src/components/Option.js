export default function Option(props) {
    const style = {
        // backgroundColor: props.checkAnswers ? (props.optionObj.isCorrect ? "#94D7A2" : "#F8BCBC") : "#D6DBF5",
        // border: props.optionObj.isSelected ? (props.checkAnswers ? "0rem solid white" : "0.08rem solid #D6DBF5") : "",
        // color: props.checkAnswers ? "#293264" : "",
        // opacity: (props.checkAnswers && (!props.optionObj.isSelected || !props.optionObj.isCorrect)) ? "0.5" : ""
        backgroundColor: props.checkAnswers ? (props.optionObj.isCorrect ? "#94D7A2" : (props.optionObj.isSelected ? "#F8BCBC" : "tranparent")) : (props.optionObj.isSelected ? "#D6DBF5" : "transparent"),
        border: props.checkAnswers ? (props.optionObj.isCorrect ? "none" : (props.optionObj.isSelected ? "none" : "0.08rem solid #4d5b9e")) : (props.optionObj.isSelected ? "none" : "0.08rem solid #4d5b9e"),
        opacity: props.checkAnswers ? (props.optionObj.isCorrect ? "1" : "0.5") : "1"
     }

    return (
        <button className="option" style={style} onClick={props.checkAnswers ? function () {} : () => props.toggleOption(props.optionObj.id)}>
            {props.optionObj.text}
        </button>
    )
}