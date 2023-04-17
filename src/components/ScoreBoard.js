const ScoreBoard =(props) =>{
    return(
        <div>
            <span>X - {props.value.xScores}</span>
            <span>O - {props.value.oScores}</span>
        </div>
    )
}
export default ScoreBoard;