import { EventCommand, useToolBarEffect } from "../../api/middleware/ToolBarEffect"
/**
 * 关闭模态框
 */
export const closeModal = () => {
    useToolBarEffect.send(EventCommand.CLOSE)
}