import { SvgIcon } from "../../../SvgIcon/SvgIcon";
import { ChildrenProps } from "../../api/middleware/ToolBarEffect/template";
import styles from "./Comment.module.css"
export const Comment = (props: ChildrenProps) => {
    console.log(props)
    return (
        <div className={styles["Comment-container"]}>
            <div className={styles["Comment-header"]}>
                <p className={styles["Comment-header-title"]}>71条评论</p>
                <SvgIcon iconClass="close" width={32} height={32} className={styles["Comment-header-action"]}/>
            </div>
        </div>
    )
}