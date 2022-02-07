import { ArticleComment, SecondaryComment } from "../../../../../../../type/article";
import { baseConversion } from "../../../../../../../utils/number";
import { ActionData, Comment } from "../../../../../../Comment/Comment";
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
    ].filter((_, index) => condition[index] === '1')
    return (
        <Comment image={avatar}
            nick={nick}
            icons={actions}
            content={<span>{content}</span>}
        />
    )
}

const SCommentAction = (props: SCommentActionProps) => {
    const {id, rootId, user: {nick, avatar}, btc:{comment, like, share}, preComment} = props.comment
    if (preComment === null)
    return (
        <div>

        </div>
    )
}