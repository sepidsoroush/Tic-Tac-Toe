import { useState } from "react"
import styles from '@/styles/Board.module.css'

const Square = ()=>{
    const [value , setValue] = useState(null)
    function handleClick(){
        setValue('X')
    }
    return(
        <button 
        className={styles.square}
        onClick={handleClick}>{value}</button>
    )
}
const Board = ()=>{
    return(
        <div >
            <div className={styles.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={styles.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={styles.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    );
}
export default Board;