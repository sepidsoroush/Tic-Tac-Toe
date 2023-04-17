import styles from '@/styles/Icons.module.css'
import {ResetIcon} from './Icons'

const Refresh =(props)=>{
    return(
        <button onClick={props.onClick} className={styles.icon}>
            <ResetIcon  />
        </button>
    )
}
export default Refresh;