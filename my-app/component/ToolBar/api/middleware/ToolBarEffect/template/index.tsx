import { Article } from "../../../../../../type/article"
import styles from "./index.module.css"
export interface ChildrenProps {
    article: Article,
    [props: string]: any
}
interface TemplateProps {
    render: React.FC<ChildrenProps>,
    article: Article
}
const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    const F = props.render
    console.log("render")
    return (
        <div className={styles["template-container"]}>
            <F article={props.article}/>
        </div>
    )
}
export default Template