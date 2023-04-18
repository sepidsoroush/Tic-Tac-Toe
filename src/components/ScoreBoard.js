import styles from '@/styles/ScoreBoard.module.css'
import {Circle , Cross} from "./Icons";

const ScoreBoard =(props) =>{
    return(
        <div className={styles.container}>
            <div className={`${styles.scores} ${styles.xPlayer}`}>
                <span className={styles.icons}><Cross/></span>
                &nbsp;&#8211;&nbsp;
                <span>{props.value.xScores}</span>
            </div>
            <div className={`${styles.scores} ${styles.oPlayer}`}>
                <span className={styles.icons}><Circle/></span>
                &nbsp;&#8211;&nbsp;
                <span>{props.value.oScores}</span>
            </div>
        </div>
    )
}
export default ScoreBoard;