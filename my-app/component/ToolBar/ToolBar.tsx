/**
 * @author: 野漫横江
 */
import { ToolBarItem } from "./children/ToolBarItem/ToolBarItem"
import styles from './ToolBar.module.css'
import { getArticleData } from "../../api/article"
import React, { useEffect, useState } from "react"
import { Response, StatusCode } from "../../utils/api/response/type"
import { SvgIcon } from "../SvgIcon/SvgIcon"
import { ClassNameBuilder } from "../../utils/style"
import { Article } from "../../type/article"
import { ToolBarModal } from "./components/ToolBarModal/ToolBarModal"
export interface ToolBarAction {
    icon: string,
    content: string | number,
    fixed: boolean,
    onClick?: () => void
}
export interface ToolBarProps {
    className?: string,
}

/**
 * 使用flex、grid布局，ToolBar控件分normal、expend两个状态，默认为normal，点击expendBtn切换状态。
 * @returns 
 */
export const ToolBar: React.FC<ToolBarProps> = () => {
    const [data, setData] = useState({ comment: 0, like: 0, share: 0 })
    const [expendBtnStyle, setExpendBtnStyle] = useState({
        rootClassName: styles['ToolBar-root'],
        containerClassName: styles['ToolBar-contaienr'],
        backGroundClassName: styles['ToolBar-background-container'],
        actionsClassName: styles['ToolBar-actions'],
        expendBtnClassName: styles['ToolBar-expand-btn'],
        iconName: "more",
        isExpend: false
    })
    const rootClassNameController = ClassNameBuilder.from([styles['ToolBar-root'], styles['ToolBar-root-expend']]).build()
    const containerClassNameController = ClassNameBuilder.from([styles['ToolBar-contaienr'], styles['ToolBar-contaienr-expend']]).build()
    const backGroundClassNameController = ClassNameBuilder.from([styles['ToolBar-background-container'], styles['ToolBar-background-container-expend']]).build()
    const actionsClassNameController = ClassNameBuilder.from([styles['ToolBar-actions'], styles['ToolBar-actions-expend']]).build()
    const expendBtnClassNameController = ClassNameBuilder.from([styles['ToolBar-expand-btn'], styles['ToolBar-expand-btn-expend']]).build()
    const articleId = "123123"
    const { comment, like, share } = data
    const renderData: ToolBarAction[] = [
        { icon: 'comment', content: comment, fixed: true },
        { icon: 'like', content: like, fixed: true },
        { icon: 'share', content: share, fixed: true },
        { icon: 'issue', content: "反馈", fixed: false },
        { icon: 'favorite', content: "收藏", fixed: false },
        { icon: 'voice', content: "朗读", fixed: false }
    ]
    const {
        isExpend,
        iconName,
        rootClassName,
        containerClassName,
        backGroundClassName,
        actionsClassName,
        expendBtnClassName } = expendBtnStyle
    useEffect(() => {
        getArticleData({articleId}).then((response: unknown) => {
            const { code, data, message } = response as Response
            if (code !== StatusCode.SUCCESS) {
                alert("error1")
                return
            }
            const {comment, like, share} = (data as Article)
            setData({ comment, like: like.value, share })
        })
    }, [articleId])
    const expendHandle = () => {
        const nextIsExpend = !isExpend
        setExpendBtnStyle({
            isExpend: nextIsExpend,
            rootClassName: rootClassNameController(nextIsExpend),
            containerClassName: containerClassNameController(nextIsExpend),
            backGroundClassName: backGroundClassNameController(nextIsExpend),
            actionsClassName: actionsClassNameController(nextIsExpend),
            expendBtnClassName: expendBtnClassNameController(nextIsExpend),
            iconName: nextIsExpend ? "down" : "more",
        })
    }
    const Template = (ToolBarModal.template()) as React.FC<any>
    return (
        <div className={rootClassName}>
            <div className={containerClassName}>
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
                <div className={expendBtnClassName} onClick={expendHandle}>
                    <SvgIcon key={iconName} iconClass={iconName} height={32} />
                </div>
            </div>
            <div className={backGroundClassName}><div></div></div>
            <Template />
        </div>
    )
}