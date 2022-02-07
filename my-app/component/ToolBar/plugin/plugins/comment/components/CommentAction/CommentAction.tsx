import { ArticleComment, SecondaryComment } from "../../../../../../../type/article";
import { baseConversion } from "../../../../../../../utils/number";
import { SvgIcon } from "../../../../../../SvgIcon/SvgIcon";
import styles from "./CommentAction.module.css"
import { onClickHandles } from "./handle";
interface CommentActionProps {
    className?: string,
    /** 文章单条评论数据 */
    comment: ArticleComment,
    /**```
     * share comment like
     * 000 001 010 100 011 101 110 111
     * 0    1   2   4   3   5   6   7
     * 为1表示展示对应的图标，全部展示则为7，不填写type则默认为7
     * ```
     */
    type?: number // 表示显示哪些图标
}

interface SCommentActionProps {
    className?: string,
    /** 文章单条评论数据 */
    comment: SecondaryComment,
    /**```
     * share comment like
     * 000 001 010 100 011 101 110 111
     * 0    1   2   4   3   5   6   7
     * 为1表示展示对应的图标，全部展示则为7，不填写type则默认为7
     * ```
     */
    type?: number // 表示显示哪些图标
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
            {data.map(action => <Action key={action.name + action.value.toString()} data={action}/>)}
        </span>
    )
}

/* 一条评论列表 */
export const CommentAction: React.FC<CommentActionProps> = (props: CommentActionProps) => {
    const {user: {nick, avatar}, type: articleType, btc: {comment, like, share}, content} = props.comment
    const {type} = props
    // 000 001 010 100 011 101 110 111
    // 0 1 2 4 3 5 6 7
    // 为1表示展示对应的图标，全部展示则为7
    const condition = baseConversion(type || 7, 2, 3)
    const actions: ActionData[] = [
        {name: "share", value: share || 0, onClick: () => onClickHandles.share(props.comment)},
        {name: "comment", value: comment || 0, onClick: () => onClickHandles.comment(props.comment)}, 
        {name: "like", value: like, onClick: () => onClickHandles.like(props.comment)}
    ].filter((icon, index) => condition[index] === '1')
    const actionsClassName = styles["CommentAction-foot-action"]
    return (
        <div className={styles["CommentAction-contaienr"]}>
            <div className={styles["CommentAction-main"]}>
                <div className={styles["CommentAction-avatar"]}>
                    <img src={avatar} alt="头像" width={"48px"} height={"48px"} />
                </div>
                <div className={styles["CommentAction-body"]}>
                    <span className={styles["CommentAction-nick"]}>{nick}</span>
                    <p className={styles["CommentAction-comment"]}>{content}</p>
                </div>
            </div>
            <div className={styles["CommentAction-foot"]}>
                <Actions className={styles["CommentAction-foot-actions"]} data={actions}/>
            </div>
        </div>
    )
}

// const SCommentAction = (props: SCommentActionProps) => {
//     const {id, rootId, user: {nick, avatar}, btc:{comment, like, share}, preComment} = props.comment
//     if (preComment === null)
//     return (
//         <div>

//         </div>
//     )
// }