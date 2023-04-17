import styles from '@/styles/ScoreBoard.module.css'

const ScoreBoard =(props) =>{
    return(
        <div className={styles.container}>
            <span className={styles.xPlayer}>X - {props.value.xScores}</span>
            <span className={styles.oPlayer}>O - {props.value.oScores}</span>
        </div>
    )
}
export default ScoreBoard;