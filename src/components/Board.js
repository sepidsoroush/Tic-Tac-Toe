import { useState } from "react"
import styles from '@/styles/Board.module.css'

const Square = ({value , onSquareClick})=>{
    return(
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    )
}
const Board = ()=>{
    const [squares , setSquares] = useState(Array(9).fill(null))
    const [xIsNext , setXIsNext] = useState(true)
    function handleClick(i){
        const nextSquare = squares.slice();
        console.log(nextSquare)
        if(xIsNext){
            nextSquare[i] = 'X';
        }else{
            nextSquare[i] = 'O';
        }
        setSquares(nextSquare);
        setXIsNext(!xIsNext);
        console.log(squares);
    }
    return(
        <div >
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
    );
}
export default Board;