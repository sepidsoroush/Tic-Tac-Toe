import styles from '@/styles/Square.module.css'
import {Circle , Cross} from "./Icons";

const Square = (props)=>{
    return(
        <button className={styles.square} onClick={props.onClick}>
            <span className={`${props.value ==='X' ? styles.xPlayer : styles.oPlayer} ${styles.playerIcon}`}>{props.value ==='X' ? <Cross/> : props.value ==='O' ? <Circle/> :null}</span>
        </button>
    )
}
export default Square;