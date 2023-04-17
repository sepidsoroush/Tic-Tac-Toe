import styles from '@/styles/Board.module.css'
import Square from "./Square"

const Board = (props)=>{
return(
    <div className={styles.container}>
        <div className={styles.boardRow}>
            <Square value={props.value[0]} onClick={()=>props.onClick(0)} />
            <Square value={props.value[1]} onClick={()=>props.onClick(1)} />
            <Square value={props.value[2]} onClick={()=>props.onClick(2)} />
        </div>
        <div className={styles.boardRow}>
            <Square value={props.value[3]} onClick={()=>props.onClick(3)} />
            <Square value={props.value[4]} onClick={()=>props.onClick(4)} />
            <Square value={props.value[5]} onClick={()=>props.onClick(5)} />
        </div>
        <div className={styles.boardRow}>
            <Square value={props.value[6]} onClick={()=>props.onClick(6)} />
            <Square value={props.value[7]} onClick={()=>props.onClick(7)} />
            <Square value={props.value[8]} onClick={()=>props.onClick(8)} />
        </div>
    </div>
);
}
export default Board;