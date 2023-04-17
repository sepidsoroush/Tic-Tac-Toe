import styles from '@/styles/Board.module.css'
import {ResetIcon} from './Icons'

const Refresh =(props)=>{
    return(
        <button onClick={props.onClick} className={styles.reset}>
            <ResetIcon  />
        </button>
    )
}
export default Refresh;