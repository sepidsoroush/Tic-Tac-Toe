import { useState , useEffect } from "react"
import Board from "./Board"
import Buttons from "./Buttons";
import Message from "./Message";
import ScoreBoard from "./ScoreBoard";
import WinnerLine from "./WinnerLine";

let winnerLine ;
function calculateWinner (squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            winnerLine = lines.indexOf(lines[i]);
            return squares[a];
        }
    }
    for(let j = 0; j < squares.length; j++) {
        if (squares[j] == null) {
          return null;
        }
     }
     return "Draw";
}

const Game = ()=>{
    const emptyBoard = Array(9).fill(null);
    const [squares , setSquares] = useState(emptyBoard)
    const [xIsNext , setXIsNext] = useState(true)
    const [turn , setTurn] = useState(true);
    const [scores , setScores] = useState({xScores : 0 , oScores : 0});
    
    const handleClick = (i) => {
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquare = squares.slice();
        if(xIsNext){
            nextSquare[i] = 'X';
        }else{
            nextSquare[i] = 'O';
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
    }
    
    const winner = calculateWinner(squares);
    let status ;
    if (winner === 'X' || winner === 'O'){
        status = "Winner : "+winner;
    }else if(winner ==='Draw'){
        status = "Draw!"
    }
    else{
        status = "Next Player : "+(xIsNext? 'X':'O');
    }
    useEffect(() => {
        if (winner === "O") {
          setScores({ ...scores, oScores: scores.oScores + 1 });
        } else if (winner === "X") {
          setScores({ ...scores, xScores: scores.xScores + 1 });
        }
      }, [winner]);

    const handleReset = ()=>{
        setSquares(emptyBoard);
        setXIsNext(true);
        setScores({xScores : 0 , oScores : 0});
        winnerLine = null;
    }
    const handleNext = ()=>{
        setSquares(emptyBoard);
        setTurn(!turn);
        setXIsNext(turn);
        winnerLine = null;
    }
    
    return(
        <div>
            <Message value={status} />
            <ScoreBoard value={scores} />
            <WinnerLine value={winnerLine} />
            <Board value={squares} onClick={handleClick} />
            <Buttons handleReset={handleReset} handleNext={handleNext} />
        </div>
    );
}
export default Game;