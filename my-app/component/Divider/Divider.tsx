/**
 * @author: 野漫横江
 */
import styles from "./Divider.module.css"

interface DividerProps {
    contentPosition?: "left" | "right" | "center",
    children?: JSX.Element,
    className?: string
}

const styleMap = {
    left: styles.divierTextLeft,
    center: styles.divierTextCenter,
    right: styles.divierTextRight,
}

export const Divider = (props: DividerProps) => {
    const {contentPosition, children, className} = props
    const childrenClassName = `${styles.dividerText} ${styleMap[contentPosition || "center"]}`
    const rootClassName = className ? `${styles.root} ${className}` : styles.root
    const Children = () => {
        if (!children) return null
        return (
            <div className={childrenClassName}>
                {children}
            </div>
        )
    }
    return (
        <div className={rootClassName}>
            <div className={styles.divider}>
                <Children />
            </div>
        </div>
    )
}