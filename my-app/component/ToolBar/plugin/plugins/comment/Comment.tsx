import { useEffect, useState, FocusEvent, FormEvent } from "react";
import { geArticleComment } from "../../../../../api/article";
import { ArticleComment } from "../../../../../type/article";
import { Response, StatusCode } from "../../../../../utils/api/response/type";
import { ClassNameBuilder } from "../../../../../utils/style";
import { SvgIcon } from "../../../../SvgIcon/SvgIcon";
import { useToolBarEffect } from "../../../api/middleware/ToolBarEffect";
import { ChildrenProps } from "../../../api/middleware/ToolBarEffect/template";
import { closeModal } from "../../api";
import styles from "./Comment.module.css"
import { CommentAction } from "./CommentAction/CommentAction";

const Foot = () => {
    const [isFirstEdit, setIsFirstEdit] = useState(true)
    const textareaClassController = ClassNameBuilder.from([styles["Comment-input-talk"], styles["Comment-input-talk-active"]]).build()
    const [sendBtnClassName, setSendBtnClassName] = useState(styles["Comment-btn-send-container-hidden"])
    const [textareaClassName, setTextareaClassName] = useState(textareaClassController(false))
    const SendBtn = () => {
        return (
            <div className={sendBtnClassName}>
                <SvgIcon className={styles["Comment-btn-send-icon"]} width={18} height={18} iconClass="send"/>
            </div>
        )
    }
    const changeHandle = (e: FocusEvent<HTMLDivElement>) => {
        e.preventDefault()
        const value = e.target.innerText
        const ZERO = isFirstEdit ? 0 : 1 // dom的问题，首次写入数据时长度为0，一旦写入数据后长度会变为1，且组件未销毁前该情况不会改变
        setIsFirstEdit(false)
        if (value.length === ZERO) {
            setTextareaClassName(textareaClassController(false))
            setSendBtnClassName(styles["Comment-btn-send-container-hidden"])
        } else {
            setTextareaClassName(textareaClassController(true))
            setSendBtnClassName(styles["Comment-btn-send-container"])
        }
    }

    /*  限制字符数在150个 */
    const verifyHandle = (e: FormEvent<HTMLDivElement>) => {
        interface ExtraAttributes  {
            data?: string
            [key: string]: any
        }
        const target = e.target as HTMLDivElement
        const preLength = target.innerText.length
        const newValLength = (e as ExtraAttributes).data?.length || 0
        /* 大于151是因为，空时innerText.length === 1 */
        if (preLength + newValLength > 151) e.preventDefault()
    }
    return (
        <div className={styles["Comment-foot-container"]}>
            <div contentEditable
                className={textareaClassName}
                onBeforeInput={verifyHandle}
                onInput={changeHandle}>
            </div>
            <SendBtn/>
        </div>
    )
}

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
            <Foot />
        </div>
    )
}

// BUG: 
