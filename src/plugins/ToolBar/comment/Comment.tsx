import React, { useEffect, useState } from "react";
import { getArticleComment } from "../../../api/article";
import { ArticleComment } from "../../../type/article";
import { Response, StatusCode } from "../../../utils/api/response/type";
import { SvgIcon } from "../../../component/SvgIcon/SvgIcon";
import { ChildrenProps } from "../../../component/ToolBar/api/middleware/ToolBarEffect/template";
import { closeModal } from "../../../component/ToolBar/plugin/api";
import { Comments, createCommentAcion } from "./components/Comments/Comments";
import { Foot } from "./components/Foot/Foot";
import styles from "./Comment.module.css"
import { Drawer } from "./components/Drawer/Drawer";

/**ToolBar的插件组件，展示文章总体评论 */
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
        getArticleComment({articleId: id}).then((response: unknown) => {
            const {code, data} = response as Response
            if (code !== StatusCode.SUCCESS) {
                alert("what's up?")
                return
            }
            setComments([...comments, ...data.comments])
        })
    }, [id])
    
    return (
        <div className={rootClassName}>
            <div className={styles["Comment-header"]}>
                <p className={styles["Comment-header-title"]}>{comment}条评论</p>
                <SvgIcon onClick={close} iconClass="close" width={32} height={32} className={styles["Comment-header-action"]}/>
            </div>
            <Comments className={styles["Comment-body"]} render={() => createCommentAcion(comments)}/>
            <Foot />
            <Drawer/>
        </div>
    )
}
