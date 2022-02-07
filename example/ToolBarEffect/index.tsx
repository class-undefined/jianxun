import { useToolBarEffect } from "../../src/component/ToolBar/api/middleware/ToolBarEffect"
import { ChildrenProps } from "../../src/component/ToolBar/api/middleware/ToolBarEffect/template"
import { ToolBarPluginType } from "../../src/component/ToolBar/api/middleware/plugin/type"
const Test: React.FC<ChildrenProps> = (props: ChildrenProps) => {
    return <div>{props.content}</div>
}

export const TestToolBarEffect = (content: string) => {
    useToolBarEffect.render(ToolBarPluginType.COMMENT, (props: ChildrenProps) => <Test article={props.article} content={content}/>)
}