import { ChildrenProps } from "../../api/middleware/ToolBarEffect/template";
import styles from "./Comment.module.css"
export const Comment = (props: ChildrenProps) => {
    console.log(props)
    return (
        <div className={styles["Comment-container"]}>

        </div>
    )
}