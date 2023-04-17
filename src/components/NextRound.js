import styles from '@/styles/Icons.module.css'
import {Next} from './Icons'

const NextRound =(props)=>{
    return(
        <button onClick={props.onClick} className={styles.icon}>
            <Next  />
        </button>
    )
}
export default NextRound;