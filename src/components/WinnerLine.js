import styles from '@/styles/Lines.module.css'

const WinnerLine = (props) => {
    return(
    <div className={styles.container}>
        <svg height='300' width='300' className={styles.svg}>
            <line x1="0" y1="50" x2="100%" y2="50" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" id="h1"></line>
            <line x1="0" y1="50%" x2="100%" y2="50%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" id="h2"></line>
            <line x1="0" y1="250" x2="100%" y2="250" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" id="h3"></line>
            <line x1="50" y1="0" x2="50" y2="100%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" id="v1"></line>
            <line x1="50%" y1="0" x2="50%" y2="100%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" id="v2"></line>
            <line x1="250" y1="0" x2="250" y2="100%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" id="v3"></line>
            <line x1="0" y1="0" x2="100%" y2="100%" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" id="o1"></line>
            <line x1="0" y1="100%" x2="100%" y2="0" fill="#01a09e" strokeWidth="8px" stroke="#01a09e" id="o2" ></line>
        </svg>
    </div>
    )
}
    
export default WinnerLine;