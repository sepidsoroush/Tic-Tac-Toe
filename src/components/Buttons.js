import styles from '@/styles/Buttons.module.css'
import {Next , ResetIcon} from './Icons'

const Buttons =(props)=>{
    return(
        <div className={styles.container}>
            <div className={styles.btn}>
                <button onClick={props.handleReset} className={styles.icon}>
                    <ResetIcon />
                </button>
                <span className={styles.label}>Restart Game</span>
            </div>
            <div className={styles.btn}>
                <button onClick={props.handleNext} className={styles.icon}>
                    <Next/>
                </button>
                <span className={styles.label}>Next Round</span>
            </div>
        </div>
    )
}
export default Buttons;