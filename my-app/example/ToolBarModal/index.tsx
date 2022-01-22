import { ToolBarModal } from "../../component/ToolBar/components/ToolBarModal/ToolBarModal"

export const TestModal = (content: string) => {
    ToolBarModal.render(() => <div>{content}</div>)
}