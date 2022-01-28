import { ArticleComment } from "../../../../../../type/article";
import styles from "./CommentAction.module.css"
interface CommentActionProps {
    className?: string,
    comment: ArticleComment
}
export const CommentAction: React.FC<CommentActionProps> = (props: CommentActionProps) => {
    const {user: {nick, avatar}, type, btc: {comment, like, share}, content} = props.comment
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
                    
            </div>
        </div>
    )
}