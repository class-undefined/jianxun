import { ToolBarEffect } from "../../component/ToolBar/api/ToolBarEffect"
export const TestToolBarEffect = (content: string) => {
    ToolBarEffect.render("TestModal", (article) => () => <div>{content}</div>)
}