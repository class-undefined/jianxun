import { useState, FocusEvent, FormEvent } from "react"
import { ClassNameBuilder } from "../../../../../utils/style"
import { SvgIcon } from "../../../../../component/SvgIcon/SvgIcon"
import styles from "./Foot.module.css"
interface FootProps {
    sendHandle?: () => void
}
interface FootClassName {
    sendBtn: string,
    textarea: string
}
export const Foot: React.FC<FootProps> = (props: FootProps) => {
    const [isFirstEdit, setIsFirstEdit] = useState(true)
    const {sendHandle} = props
    const textareaClassController = ClassNameBuilder.from([styles["Comment-input-talk"], styles["Comment-input-talk-active"]]).build()
    const sendBtnClassController = ClassNameBuilder.from([styles["Comment-btn-send-container"], styles["Comment-btn-send-container-hidden"]]).build()
    const [footClassName, setFootClassName] = useState({sendBtn: sendBtnClassController(true), textarea: textareaClassController(false)} as FootClassName)
    const SendBtn = (props: {className: string}) => {
        return (
            <div className={props.className} onClick={sendHandle}>
                <SvgIcon className={styles["Comment-btn-send-icon"]} width={18} height={18} iconClass="send"/>
            </div>
        )
    }
    const changeHandle = (e: FocusEvent<HTMLDivElement>) => {
        e.preventDefault()
        const value = e.target.innerText
        const ZERO = isFirstEdit ? 0 : 1 // dom的问题，首次写入数据时长度为0，一旦写入数据后长度会变为1，且组件未销毁前该情况不会改变
        if (isFirstEdit) setIsFirstEdit(false)
        if (value.length === ZERO) {
            setFootClassName({
                textarea: textareaClassController(false),
                sendBtn: sendBtnClassController(true)
            })
        } else {
            if (footClassName.sendBtn === sendBtnClassController(false) && footClassName.textarea === textareaClassController(true)) return
            setFootClassName({
                textarea: textareaClassController(true),
                sendBtn: sendBtnClassController(false)
            })
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
                className={footClassName.textarea}
                onBeforeInput={verifyHandle}
                onInput={changeHandle}>
            </div>
            <SendBtn className={footClassName.sendBtn}/>
        </div>
    )
}