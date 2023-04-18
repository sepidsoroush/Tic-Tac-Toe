import styles from '@/styles/Lines.module.css'

const WinnerLine = (props) => {
    console.log(props.value , typeof(props.value))
    return(
    <div className={styles.container}>
        <svg height='300' width='300' className={styles.svg}>
            <line x1="0" y1="50" x2="100%" y2="50" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" className={props.value === 0 ? styles.active : styles.line}></line>
            <line x1="0" y1="50%" x2="100%" y2="50%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" className={props.value === 1 ? styles.active : styles.line}></line>
            <line x1="0" y1="250" x2="100%" y2="250" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" className={props.value === 2 ? styles.active : styles.line}></line>
            <line x1="50" y1="0" x2="50" y2="100%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" className={props.value === 3 ? styles.active : styles.line}></line>
            <line x1="50%" y1="0" x2="50%" y2="100%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" className={props.value === 4 ? styles.active : styles.line}></line>
            <line x1="250" y1="0" x2="250" y2="100%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" className={props.value === 5 ? styles.active : styles.line}></line>
            <line x1="0" y1="0" x2="100%" y2="100%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" className={props.value === 6 ? styles.active : styles.line}></line>
            <line x1="0" y1="100%" x2="100%" y2="0" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" className={props.value === 7 ? styles.active : styles.line} ></line>
        </svg>
    </div>
    )
}
    
export default WinnerLine;