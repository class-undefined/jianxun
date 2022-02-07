import { MouseEvent } from "react"
import {SvgIcon} from "../../../SvgIcon/SvgIcon"
import styles from "./ToolBarItem.module.css"
/* 图标 */
export interface IconActionProps {
    icon: string,
    content: string | number,
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
}
export const ToolBarItem: React.FC<IconActionProps> = (props: IconActionProps) => {
    const {icon, content} = props
    const defaultHandle = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
    }
    const onClick = props.onClick === undefined ? defaultHandle : props.onClick
    return (
        <div className={styles.container}>
            <div className={styles.action}>
                <SvgIcon onClick={onClick} className={styles.svg} iconClass={icon} width={28} height={28} color="#fff"/>
                <span className={styles.text}>{content.toString()}</span>
            </div>
        </div>
    )
}