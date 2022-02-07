import styles from "./Divider.module.css"

interface DividerProps {
    contentPosition?: "left" | "right" | "center",
    children?: JSX.Element
}

const styleMap = {
    left: styles.divierTextLeft,
    center: styles.divierTextCenter,
    right: styles.divierTextRight,
}

export const Divider = (props: DividerProps) => {
    const {contentPosition, children} = props
    const childrenClassName = `${styles.dividerText} ${styleMap[contentPosition || "center"]}`
    const Children = () => {
        if (!children) return null
        return (
            <div className={childrenClassName}>
                {children}
            </div>
        )
    }
    return (
        <div>
            <div className={styles.divider}>
                <Children />
            </div>
        </div>
    )
}