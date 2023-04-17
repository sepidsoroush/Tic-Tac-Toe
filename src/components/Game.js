import { useState , useEffect } from "react"
import styles from '@/styles/Game.module.css'
import Board from "./Board"
import Refresh from "./Refresh";
import NextRound  from "./NextRound";
import Message from "./Message";
import ScoreBoard from "./ScoreBoard";

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
        status = "Next Player :"+(xIsNext? 'X':'O');
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
    }
    const handleNext = ()=>{
        setSquares(emptyBoard);
        setXIsNext(false);
    }

    return(
        <div className={styles.container}>
            <Message value={status} />
            <ScoreBoard value={scores} />
            <Board value={squares} onClick={handleClick} />
            <div className={styles.buttons}>
                <div className={styles.btn}>
                    <Refresh onClick={handleReset} />
                    <span className={styles.label}>Restart Game</span>
                </div>
                <div className={styles.btn}>
                    <NextRound onClick={handleNext} />
                    <span className={styles.label}>Next Round</span>
                </div>
            </div>
        </div>
    );
}
export default Game;