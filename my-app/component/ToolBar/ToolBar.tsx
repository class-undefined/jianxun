/**
 * @author: 野漫横江
 */
import { IconActionProps, ToolBarItem } from "./children/ToolBarIcon/ToolBarItem"
import styles from './ToolBar.module.css'
import { getArticleData } from "../../api/article"
import { useEffect, useState } from "react"
import { Response, StatusCode } from "../../utils/api/response/type"
import { SvgIcon } from "../SvgIcon/SvgIcon"
import { ClassNameBuilder } from "../../utils/style"
export interface ToolBarAction {
    icon: string,
    content: string,
    fixed: boolean,
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
    const [expendBtnStyle, setExpendBtnStyle] = useState({
        rootClassName: styles['ToolBar-contaienr'],
        actionsClassName: styles['ToolBar-actions'],
        iconName: "more",
        isExpend: false
    })
    const rootClassNameController = ClassNameBuilder.from([styles['ToolBar-contaienr'], styles['ToolBar-contaienr-expend']]).build()
    const actionsClassNameController = ClassNameBuilder.from([styles['ToolBar-actions'], styles['ToolBar-actions-expend']]).build()
    const articleId = "123123"
    const {comment, like, share} = data
    const renderData: ToolBarAction[] = [
        {icon: 'comment', content: comment, fixed: true},
        {icon: 'like', content: like, fixed: true},
        {icon: 'share', content: share, fixed: true},
        {icon: 'issue', content: "反馈", fixed: false},
        {icon: 'favorite', content: "收藏", fixed: false},
        {icon: 'voice', content: "朗读", fixed: false}
    ] 
    const {isExpend, iconName, rootClassName, actionsClassName} = expendBtnStyle
    useEffect(() => {
        getArticleData(articleId).then((response: unknown) => {
            const {code, data, message} = response as Response
            if (code !== StatusCode.SUCCESS) {
                alert("error1")
                return
            }
            setData({...data})
        })
    }, [articleId, isExpend])
    
    const expendHandle = () => {
        
        setExpendBtnStyle({
            isExpend: !isExpend,
            rootClassName: rootClassNameController(!isExpend),
            iconName: !isExpend ? "down" : "more",
            actionsClassName: actionsClassNameController(!isExpend)
        })
    }
    return (
        <div className={rootClassName}>
            <div className={actionsClassName}>
                {
                    renderData.filter((actionItem => {
                        if (actionItem.fixed) return true
                        return isExpend
                    })).map((actionItem: ToolBarAction) => {
                        return (
                            <div key={actionItem.icon} className={styles['ToolBar-action-item']}>
                                <ToolBarItem {...actionItem} />
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles['ToolBar-expand-btn']} onClick={expendHandle}>
                <SvgIcon key={iconName} iconClass={iconName} height={32}/>
            </div>
        </div>
    )
}