import { useState } from "react"
import styles from '@/styles/Board.module.css'
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
    // if (winner) {
    //     if (winner === 'X' ){
    //         status = "Winner : "+winner;
    //         let { xScores } = scores;
    //         xScores += 1;
    //         setScores({ ...scores, xScores })
    //         console.log(scores)
    //     }else if (winner === 'O'){
    //         status = "Winner : "+winner;        
    //         let { oScores } = scores;
    //         oScores += 1;
    //         setScores({ ...scores, oScores })
    //         console.log(scores);
    //     }else if(winner ==='Draw'){
    //         status = "Draw!"
    //     }
    // }else{
    //     status = "Next Player :"+(xIsNext? 'X':'O');
    // }
    if (winner === 'X' || winner === 'O'){
        status = "Winner : "+winner;
    }else if(winner ==='Draw'){
        status = "Draw!"
    }
    else{
        status = "Next Player :"+(xIsNext? 'X':'O');
    }

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
            <div>
                <Refresh onClick={handleReset} />
                <NextRound onClick={handleNext} />
            </div>
        </div>
    );
}
export default Game;