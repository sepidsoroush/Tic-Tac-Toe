import styles from '@/styles/Square.module.css'
import {Circle , Cross} from "./Icons";

const Square = (props)=>{
    return(
        <button className={styles.square} onClick={props.onClick}>
            {props.value ==='X' ? 
            <span className={`${props.value ==='X' ? styles.xPlayer : styles.oPlayer} ${styles.playerIcon}`}><Cross /></span> 
            : props.value ==='O' ? 
            <span className={`${props.value ==='X' ? styles.xPlayer : styles.oPlayer} ${styles.playerIcon}`}><Circle /> </span>
            :null}
        </button>
    )
}
export default Square;