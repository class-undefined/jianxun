import { IconActionProps, ToolBarItem } from "./children/ToolBarIcon/ToolBarItem"
import styles from './ToolBar.module.css'
import { getArticleData } from "../../api/article"
import { useEffect, useState } from "react"
import { Response, StatusCode } from "../../utils/api/response/type"
export interface ToolBarAction {
    icon: string,
    content: string,
    onClick?: () => void
}
export interface ToolBarProps {
    className?: string,
}

/**
 * 使用flex布局，将下层的三个图标下移离开可视区，然后点击扩展按钮时调整整体控件。
 * @returns 
 */
export const ToolBar: React.FC<ToolBarProps> = () => {
    const [data, setData] = useState({comment: '-', like: '-', share: '-'})
    const articleId = "123123"
    const {comment, like, share} = data
    const renderData: ToolBarAction[] = [
        {icon: 'comment', content: comment},
        {icon: 'like', content: like},
        {icon: 'share', content: share},
        {icon: 'issue', content: "反馈"},
        {icon: 'favorite', content: "收藏"},
        {icon: 'voice', content: "朗读"}
    ] 
    useEffect(() => {
        getArticleData(articleId).then((response: unknown) => {
            const {code, data, message} = response as Response
            if (code !== StatusCode.SUCCESS) {
                alert("error1")
                return
            }
            setData({...data})
        })
    }, [articleId])
    return (
        <div className={styles['ToolBar-contaienr']}>
            <div className={styles['ToolBar-actions']}>
                {
                    renderData.map((actionItem: ToolBarAction) => {
                        return (
                            <div key={actionItem.icon} className={styles['ToolBar-action-item']}>
                                <ToolBarItem {...actionItem} />
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles['ToolBar-expand-btn']}>btn</div>
        </div>
    )
}