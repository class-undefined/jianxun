import { ArticleComment, SecondaryComment } from "../../../../../type/article"
import { CommentAction } from "../CommentAction/CommentAction"
import { SCommentAction } from "../SCommentAction/SCommentAction"
interface CommentsProps {
    className?: string,
    /**使用一个渲染函数`createCommentAcion` or `createSCommentAcion`来渲染列表元素，使父组件无需处理渲染过程，将渲染交给子组件来完成 */
    render: () => JSX.Element[]
}

export const createCommentAcion = (comments: ArticleComment[], onClick?: () => void) => {
    return comments.map(comment => {
        return (
            <li key={comment.id}>
                <CommentAction comment={comment} onClick={onClick}/>
            </li>
        )
    })
}

export const createSCommentAcion = (comments: SecondaryComment[], onClick?: () => void) => {
    return comments.map(comment => {
        return (
            <li key={comment.id}>
                <SCommentAction comment={comment} onClick={onClick}/>
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