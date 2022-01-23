import styles from "./index.module.css"
interface TemplateProps {
    children: JSX.Element
}
const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <div className={styles["template-container"]}>
            {props.children}
        </div>
    )
}
export default Template