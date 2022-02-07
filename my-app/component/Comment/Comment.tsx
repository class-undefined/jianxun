import { SvgIcon } from "../SvgIcon/SvgIcon"
import styles from "./Comment.module.css"
interface CommentProps {
    image: string,
    nick: string,
    content: JSX.Element,
    icons: ActionData[]

}
interface ActionData {
    name: string,
    value: number,
    onClick?: () => void
}

interface ActionProps {
    className?: string,
    data: ActionData
}

interface ActionsProps {
    className?: string,
    data: ActionData[]
}
const Action: React.FC<ActionProps> = (props: ActionProps) => {
    const {name, value, onClick} = props.data
    const content = value === 0 ? "" : value.toString()
    const className = props.className ? props.className : ""
    return (
        <span className={className} onClick={onClick}>
            <SvgIcon className={`${styles["foot-action"]} ${styles["foot-action-icon"]}`} 
                iconClass={name} 
                width={18} 
                height={25}/>
            <span className={`${styles["foot-action"]} ${styles["foot-action-value"]}`}
                >{content}
            </span>
        </span>
    )
}


const Actions: React.FC<ActionsProps> = (props: ActionsProps) => {
    const {className, data} = props
    return (
        <span className={className ? className : ""}>
            {data.map(action => <Action key={action.name + action.value.toString()} data={action}/>)}
        </span>
    )
}
export const Comment: React.FC<CommentProps> = (props: CommentProps) => {
    const {image, nick, content, icons} = props
    return (
        <div className={styles["contaienr"]}>
            <div className={styles["main"]}>
                <div className={styles["avatar"]}>
                    <img src={image} alt="头像" width={"48px"} height={"48px"} />
                </div>
                <div className={styles["body"]}>
                    <span className={styles["nick"]}>{nick}</span>
                    <p className={styles["comment"]}>{content}</p>
                </div>
            </div>
            <div className={styles["foot"]}>
                <Actions className={styles["foot-actions"]} data={icons}/>
            </div>
        </div>
    )
}