import { IconActionProps } from "./children/ToolBarIcon/ToolBarIcon"
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
    console.log(styles)
    return (
        <div className={styles['ToolBar-contaienr']}>
            <div className={styles['ToolBar-actions']}>
                <div className={styles['ToolBar-action-item']}>1</div>
                <div className={styles['ToolBar-action-item']}>2</div>
                <div className={styles['ToolBar-action-item']}>3</div>
                <div className={styles['ToolBar-action-item']}>4</div>
                <div className={styles['ToolBar-action-item']}>5</div>
                <div className={styles['ToolBar-action-item']}>6</div>
            </div>
            <div className={styles['ToolBar-expand-btn']}>btn</div>
        </div>
    )
}