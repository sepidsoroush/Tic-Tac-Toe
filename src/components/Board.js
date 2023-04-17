import styles from '@/styles/Board.module.css'
import Square from "./Square"

const Board = (props) => (
    <div className={styles.container}>
        {[ ...Array(9)].map((_, pos) => <Square key={pos} onClick={()=>props.onClick(pos)} value={props.value[pos]}/>)}
    </div>
)
export default Board;