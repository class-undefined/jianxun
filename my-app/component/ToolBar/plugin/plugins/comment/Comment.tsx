import { useEffect, useState } from "react";
import { geArticleComment } from "../../../../../api/article";
import { ArticleComment } from "../../../../../type/article";
import { Response, StatusCode } from "../../../../../utils/api/response/type";
import { SvgIcon } from "../../../../SvgIcon/SvgIcon";
import { useToolBarEffect } from "../../../api/middleware/ToolBarEffect";
import { ChildrenProps } from "../../../api/middleware/ToolBarEffect/template";
import { closeModal } from "../../api";
import styles from "./Comment.module.css"
import { CommentAction } from "./CommentAction/CommentAction";
export const Comment = (props: ChildrenProps) => {
    const {article} = props
    const {id, comment} = article
    const [rootClassName, setRootClassName] = useState(styles["Comment-container"])
    const close = () => {
        setRootClassName(styles["Comment-container"] + " " + styles["Comment-container-close"])
        setTimeout(() => {
            closeModal()
        }, 450)
    }
    const [comments, setComments] = useState([] as ArticleComment[])
    useEffect(() => {
        geArticleComment({articleId: id}).then((response: unknown) => {
            const {code, data} = response as Response
            if (code !== StatusCode.SUCCESS) {
                alert("what's up?")
                return
            }
            setComments([...comments, ...data.comments])
        })
    }, [id])
    const Comments = () => {
        return (
            <ul className={styles["Comment-body"]}>
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
    return (
        <div className={rootClassName}>
            <div className={styles["Comment-header"]}>
                <p className={styles["Comment-header-title"]}>{comment}条评论</p>
                <SvgIcon onClick={close} iconClass="close" width={32} height={32} className={styles["Comment-header-action"]}/>
            </div>
            <Comments />
            <div className={styles["Comment-foot-container"]}>
                <input placeholder="说点什么吧" className={styles["Comment-input-talk"]} type="text" /*onFocus={}*//>
                
            </div>
        </div>
    )
}