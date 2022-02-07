import { useEffect, useState } from "react"
import { ArticleComment, SecondaryComment } from "../../../../type/article"
import { SvgIcon } from "../../../../component/SvgIcon/SvgIcon"
import { closeModal } from "../../../../component/ToolBar/plugin/api"
import { CommentAction } from "../components/CommentAction/CommentAction"
import { Divider } from "../../../../component/Divider/Divider"
import styles from "./SComment.module.css"
import { getSecondaryComment } from "../../../../api/article"
import { Response, StatusCode } from "../../../../utils/api/response/type"
import { Comments, createSCommentAcion } from "../components/Comments/Comments"
import { Foot } from "../components/Foot/Foot"
interface SecondaryCommentProps {
    className?: string,
    comment: ArticleComment
}


/**  二级评论 */
export const SComment: React.FC<SecondaryCommentProps> = (props: SecondaryCommentProps) => {
    const [rootClassName, setRootClassName] = useState(styles["SecondaryComment-container"])
    const {comment} = props
    const {id} = comment
    const [comments, setComments] = useState([] as SecondaryComment[])
    const close = () => {
        setRootClassName(styles["SecondaryComment-container"] + " " + styles["SecondaryComment-container-close"])
        setTimeout(() => {
            closeModal()
        }, 450)
    }
    useEffect(() => {
        getSecondaryComment({rootId: comment.id}).then((response: unknown) => {
            const {code, data, message} = response as Response
            if (code !== StatusCode.SUCCESS) {
                alert("error1")
                return
            }
            setComments([...comments, ...data.comments])
        })
    }, [id])
    return (
        <div className={rootClassName}>
            <div className={styles["SecondaryComment-header"]}>
                <p className={styles["SecondaryComment-header-title"]}>评论详情</p>
                <SvgIcon onClick={close} iconClass="close" width={32} height={32} className={styles["SecondaryComment-header-action"]}/>
            </div>
            <CommentAction comment={comment} type={5} />
            <Divider className={styles.divier} contentPosition="left">
                <span>全部回复</span>
            </Divider>
            <Comments className={styles["SecondaryComment-body"]} render={() => createSCommentAcion(comments)}/>
            <Foot />
        </div>
    )

}