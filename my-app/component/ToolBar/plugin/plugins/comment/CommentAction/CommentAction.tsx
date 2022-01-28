import { ArticleComment } from "../../../../../../type/article";
import { SvgIcon } from "../../../../../SvgIcon/SvgIcon";
import styles from "./CommentAction.module.css"
interface CommentActionProps {
    className?: string,
    comment: ArticleComment
}

interface ActionData {
    name: string,
    value: number
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
    const {name, value} = props.data
    const content = value === 0 ? "" : value.toString()
    const className = props.className ? props.className : ""
    return (
        <span className={className}>
            <SvgIcon className={`${styles["CommentAction-foot-action"]} ${styles["CommentAction-foot-action-icon"]}`} 
                iconClass={name} 
                width={18} 
                height={25}/>
            <span className={`${styles["CommentAction-foot-action"]} ${styles["CommentAction-foot-action-value"]}`}
                >{content}
            </span>
        </span>
    )
}

const Actions: React.FC<ActionsProps> = (props: ActionsProps) => {
    const {className, data} = props
    return (
        <span className={className ? className : ""}>
            {data.map(action => <Action data={action}/>)}
        </span>
    )
}

export const CommentAction: React.FC<CommentActionProps> = (props: CommentActionProps) => {
    const {user: {nick, avatar}, type, btc: {comment, like, share}, content} = props.comment
    const actions: ActionData[] = [
        {name: "share", value: share},
        {name: "comment", value: comment}, 
        {name: "like", value: like}]
    const actionsClassName = styles["CommentAction-foot-action"]
    return (
        <div className={styles["CommentAction-contaienr"]}>
            <div className={styles["CommentAction-main"]}>
                <div className={styles["CommentAction-avatar"]}>
                    <img src={avatar} alt="头像" width={"48px"} height={"48px"} />
                </div>
                <div className={styles["CommentAction-body"]}>
                    <p className={styles["CommentAction-nick"]}>{nick}</p>
                    <p className={styles["CommentAction-comment"]}>{content}</p>
                </div>
            </div>
            <div className={styles["CommentAction-foot"]}>
                <Actions className={styles["CommentAction-foot-actions"]} data={actions}/>
            </div>
        </div>
    )
}