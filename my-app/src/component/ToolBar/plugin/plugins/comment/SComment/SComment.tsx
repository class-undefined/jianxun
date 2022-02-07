import { useEffect, useState } from "react"
import { ArticleComment, SecondaryComment } from "../../../../../../type/article"
import { SvgIcon } from "../../../../../SvgIcon/SvgIcon"
import { closeModal } from "../../../api"
import { CommentAction } from "../components/CommentAction/CommentAction"
import { Divider } from "../../../../../Divider/Divider"
import styles from "./SComment.module.css"
import { getSecondaryComment } from "../../../../../../api/article"
import { Response, StatusCode } from "../../../../../../utils/api/response/type"
interface SecondaryCommentProps {
    className?: string,
    comment: ArticleComment
}

interface SubCommentProps {
    scomment: SecondaryComment
}

// const SubComment:React.FC<SubCommentProps> = (props: SubCommentProps) => {
//     const {scomment} = props
//     const hasPre = scomment.preComment === null

//     return (

//     )
// }

/**  二级评论 */
export const SComment: React.FC<SecondaryCommentProps> = (props: SecondaryCommentProps) => {
    const [rootClassName, setRootClassName] = useState(styles["SecondaryComment-container"])
    const {comment} = props
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
            setComments(data.comments as SecondaryComment[])
        })
    })
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
        </div>
    )

}