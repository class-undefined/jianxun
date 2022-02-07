import { ArticleComment } from "../../../../../type/article"
import { CommentAction } from "../CommentAction/CommentAction"
interface CommentsProps {
    className?: string,
    comments: ArticleComment[]
}

export const Comments: React.FC<CommentsProps> = (props: CommentsProps) => {
    const {className, comments} = props
    return (
        <ul className={className}>
            {comments.map(comment => {
                return (
                    <li key={comment.id}>
                        <CommentAction comment={comment} />
                    </li>
                )
            })}
        </ul>
    )
}