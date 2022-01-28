import { useState } from "react";
import { SvgIcon } from "../../../../SvgIcon/SvgIcon";
import { useToolBarEffect } from "../../../api/middleware/ToolBarEffect";
import { ChildrenProps } from "../../../api/middleware/ToolBarEffect/template";
import { closeModal } from "../../api";
import styles from "./Comment.module.css"
export const Comment = (props: ChildrenProps) => {
    console.log(props)
    const [rootClassName, setRootClassName] = useState(styles["Comment-container"])
    const close = () => {
        setRootClassName(styles["Comment-container"] + " " + styles["Comment-container-close"])
        setTimeout(() => {
            closeModal()
        }, 450)
    }
    return (
        <div className={rootClassName}>
            <div className={styles["Comment-header"]}>
                <p className={styles["Comment-header-title"]}>71条评论</p>
                <SvgIcon onClick={close} iconClass="close" width={32} height={32} className={styles["Comment-header-action"]}/>
            </div>
        </div>
    )
}