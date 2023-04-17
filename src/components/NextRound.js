import styles from '@/styles/Board.module.css'
import {Next} from './Icons'

const NextRound =(props)=>{
    return(
        <button onClick={props.onClick} className={styles.reset}>
            <Next  />
        </button>
    )
}
export default NextRound;