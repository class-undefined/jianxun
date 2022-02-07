import { ArticleComment, SecondaryComment } from "../../../../../type/article"
import { CommentAction } from "../CommentAction/CommentAction"
import { SCommentAction } from "../SCommentAction/SCommentAction"
interface CommentsProps {
    className?: string,
    /**使用一个渲染函数`createCommentAcion` or `createSCommentAcion`来渲染列表元素，使父组件无需处理渲染过程，将渲染交给子组件来完成 */
    render: () => JSX.Element[]
}

/**
 * Comments组件的一级评论render函数
 * @param comments 一级评论数据数组
 * @param onClick 列表的单击事件
 * @returns 返回一级评论dom列表
 */
export const createCommentAcion = (comments: ArticleComment[], onClick?: (comment: ArticleComment) => void) => {
    return comments.map(comment => {
        const handle = onClick === undefined ? undefined : () => onClick(comment)
        return (
            <li key={comment.id}>
                <CommentAction comment={comment} onClick={handle}/>
            </li>
        )
    })
}

/**
 * Comments组件的二级评论render函数
 * @param comments 二级评论数据数组
 * @param onClick 列表的单击事件
 * @returns 返回二级评论dom列表
 */
export const createSCommentAcion = (comments: SecondaryComment[], onClick?: (comment: SecondaryComment) => void) => {
    return comments.map(comment => {
        const handle = onClick === undefined ? undefined : () => onClick(comment)
        return (
            <li key={comment.id}>
                <SCommentAction comment={comment} onClick={handle}/>
            </li>
        )
    })
}

export const Comments: React.FC<CommentsProps> = (props: CommentsProps) => {
    const {className, render: createItems} = props
    return (
        <ul className={className}>
            {createItems()}
        </ul>
    )
}