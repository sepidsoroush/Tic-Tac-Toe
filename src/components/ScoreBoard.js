const ScoreBoard =(scores) =>{
    return(
        <div>
            <span>X - {scores.xScores}</span>
            <span>O - {scores.oScores}</span>
        </div>
    )
}
export default ScoreBoard;