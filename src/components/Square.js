import styles from '@/styles/Square.module.css'

const Square = (props)=>{
    return(
        <button className={styles.square} onClick={props.onClick}>
            <span className={props.value ==='X' ? styles.xPlayer : styles.oPlayer}>{props.value}</span>
        </button>
    )
}
export default Square;