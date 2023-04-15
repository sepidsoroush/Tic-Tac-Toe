import { useState } from "react"
import styles from '@/styles/Board.module.css'
import Message from "./Message";

const Square = ({value , onSquareClick})=>{
    return(
        <button className={styles.square} onClick={onSquareClick}>
            {value}
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
    for (let i=0 ; i<lines.length ; i++){
        const [a,b,c] = lines[i];
        if ( squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }else if(!squares.includes(null)){
            return 'Draw';
        }
    }
    return null;
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
    const Reset =({handleReset})=>{
        return(
            <button onClick={handleReset}>
                Reset Game
            </button>
        )
    }

    return(
        <div >
            <Message value={status} />
            <div>
                <div className={styles.boardRow}>
                    <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
                </div>
                <div className={styles.boardRow}>
                    <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
                </div>
                <div className={styles.boardRow}>
                    <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
                </div>
            </div>
            <div><Reset handleReset={()=>setSquares(emptyBoard)} /></div>
        </div>
    );
}
export default Board;