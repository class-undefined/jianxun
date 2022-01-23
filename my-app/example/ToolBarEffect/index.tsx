import { ToolBarEffect } from "../../component/ToolBar/api/ToolBarEffect"
import { ChildrenProps } from "../../component/ToolBar/api/ToolBarEffect/template"
import { ToolBarPluginType } from "../../component/ToolBar/plugin/type"
const Test: React.FC<ChildrenProps> = (props: ChildrenProps) => {
    return <div>{props.content}</div>
}


export const TestToolBarEffect = (content: string) => {
    ToolBarEffect.render(ToolBarPluginType.COMMENT, (props: ChildrenProps) => <Test article={props.article} content={content}/>)
}