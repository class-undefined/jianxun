import { IconActionProps } from "./children/ToolBarIcon/ToolBarIcon"

export interface ToolBarRenderData {
    comment: number, // 评论
    like: number, // 点赞
    share: number // 分享
}
export interface ToolBarProps {
    className: string,
    renderData: ToolBarRenderData
}

/**
 * 使用flex布局，将下层的三个图标下移离开可视区，然后点击扩展按钮时调整整体控件。
 * @returns 
 */
export const ToolBar: React.FC<ToolBarProps> = () => {
    return (
        <div>
            ...
        </div>
    )
}