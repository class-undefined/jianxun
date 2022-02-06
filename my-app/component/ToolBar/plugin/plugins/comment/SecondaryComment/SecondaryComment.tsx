import { useState } from "react"
import { ArticleComment } from "../../../../../../type/article"
import { closeModal } from "../../../api"
import styles from "./SecondaryComment.module.css"
interface SecondaryCommentProps {
    className?: string,
    comment: ArticleComment
}
/* 二级评论 */
export const SecondaryComment: React.FC<SecondaryCommentProps> = (props: SecondaryCommentProps) => {
    const [rootClassName, setRootClassName] = useState(styles["SecondaryComment-container"])
    console.log(props.comment);
    
    const close = () => {
        setRootClassName(styles["SecondaryComment-container"] + " " + styles["SecondaryComment-container-close"])
        setTimeout(() => {
            closeModal()
        }, 450)
    }

    return (
        <div className={rootClassName}>
            SecondaryComment
        </div>
    )

}