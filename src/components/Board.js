import { useState } from "react"
import styles from '@/styles/Board.module.css'
import {ResetIcon} from './Icons'

const Square = ({value , onSquareClick})=>{
    return(
        <button className={`${styles.square}`} onClick={onSquareClick}>
            <span className={value ==='X' ? styles.xPlayer : styles.oPlayer}>{value}</span>
        </button>
    )
}
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
        // else if(!squares.includes(null)){
        //     return 'Draw';
        // }
    }
    for(let j = 0; j < squares.length; j++) {
        if (squares[j] == null) {
          return null;
        }
     }
     return "Draw";
}

const Board = ()=>{
    const emptyBoard = Array(9).fill(null);
    const [squares , setSquares] = useState(emptyBoard)
    const [xIsNext , setXIsNext] = useState(true)
    function handleClick(i){
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
    const Reset =({})=>{
        function handleReset(){
            setSquares(emptyBoard);
            // setXIsNext(true);
        }
        return(
            <button onClick={handleReset} className={styles.reset}>
                <ResetIcon  />
            </button>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.status}>{status}</div>
            <div className={styles.board}>
                <div className={styles.boardRow}>
                    <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
                    <span className={styles.colBorder}></span>
                    <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
                    <span className={styles.colBorder}></span>
                    <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
                </div>
                <div className={styles.rowBorder}></div>
                <div className={styles.boardRow}>
                    <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
                    <span className={styles.colBorder}></span>
                    <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
                    <span className={styles.colBorder}></span>
                    <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
                </div>
                <div className={styles.rowBorder}></div>
                <div className={styles.boardRow}>
                    <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
                    <span className={styles.colBorder}></span>
                    <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
                    <span className={styles.colBorder}></span>
                    <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
                </div>
            </div>
            <div><Reset /></div>
        </div>
    );
}
export default Board;