import styles from '@/styles/Message.module.css'

const Message =(props)=>{
    return(
        <div className={styles.status}>{props.value}</div>
    )
}
export default Message;