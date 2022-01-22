import {SvgIcon} from "../../../SvgIcon/SvgIcon"
import styles from "./ToolBarItem.module.css"
/* 图标 */
export interface IconActionProps {
    icon: string,
    content: string | number,
    onClick?: () => void
}
export const ToolBarItem: React.FC<IconActionProps> = (props: IconActionProps) => {
    const {icon, content} = props
    return (
        <div className={styles.container}>
            <div className={styles.action}>
                <SvgIcon className={styles.svg} iconClass={icon} width={28} height={28} color="#fff"/>
                <span className={styles.text}>{content + ""}</span>
            </div>
        </div>
    )
}