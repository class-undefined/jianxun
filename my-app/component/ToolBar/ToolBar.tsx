import { IconActionProps, ToolBarItem } from "./children/ToolBarIcon/ToolBarItem"
import styles from './ToolBar.module.css'
export interface ToolBarRenderData {
    comment: number, // 评论
    like: number, // 点赞
    share: number // 分享
}
export interface ToolBarProps {
    className?: string,
    renderData?: ToolBarRenderData
}

/**
 * 使用flex布局，将下层的三个图标下移离开可视区，然后点击扩展按钮时调整整体控件。
 * @returns 
 */
export const ToolBar: React.FC<ToolBarProps> = () => {
    return (
        <div className={styles['ToolBar-contaienr']}>
            <div className={styles['ToolBar-actions']}>
                <div className={styles['ToolBar-action-item']}>
                    <ToolBarItem icon='comment' content="23"/>
                </div>
                <div className={styles['ToolBar-action-item']}>
                    <ToolBarItem icon='like' content="23"/>
                </div>
                <div className={styles['ToolBar-action-item']}>
                    <ToolBarItem icon='share' content="23"/>
                </div>
                <div className={styles['ToolBar-action-item']}>
                    <ToolBarItem icon='issue' content="反馈"/>
                </div>
                <div className={styles['ToolBar-action-item']}>
                    <ToolBarItem icon='favorite' content="收藏"/>
                </div>
                <div className={styles['ToolBar-action-item']}>
                    <ToolBarItem icon='voice' content="朗读"/>
                </div>
            </div>
            <div className={styles['ToolBar-expand-btn']}>btn</div>
        </div>
    )
}