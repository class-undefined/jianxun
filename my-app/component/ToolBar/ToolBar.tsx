export interface ToolBarRenderData {
    comment: number, // 评论
    like: number, // 点赞
    share: number // 分享
}
export interface ToolBarProps {
    className: string,
    renderData: ToolBarRenderData
}
export const ToolBar: React.FC<ToolBarProps> = () => {
    return (
        <div>
            ...
        </div>
    )
}