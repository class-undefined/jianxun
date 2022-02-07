import { ActionData, Comment } from "../../../../../component/Comment/Comment"
import { SecondaryComment } from "../../../../../type/article"
import styles from "./SecondaryComment.module.css"
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
    onClick?: () => void
}
export const SCommentAction = (props: SCommentActionProps) => {
    const {id, rootId, content, user: {nick, avatar}, btc:{comment, like, share}, preComment} = props.comment
    const {type, onClick} = props
    const actions: ActionData[] = [
        {name: "share", value: share || 0, onClick: () => {}},
        {name: "like", value: like, onClick: () => {}}
    ]
    let Content: JSX.Element
    if (preComment === null) Content = <span>{content}</span>
    else {
        Content = (
            <span>
                <span>{content}</span>
                <span>//</span>
                <span className={styles.scommentNick}>@{preComment.user.nick}: </span>
                <span>{preComment.content}</span>
            </span>
        )
    }
    return (
        <Comment image={avatar}
            onClick={onClick}
            nick={nick}
            icons={actions}
            content={Content}
        />
    )
}