/**
 * @author: 野漫横江
 */
import { ToolBarItem } from "./children/ToolBarItem/ToolBarItem"
import styles from './ToolBar.module.css'
import { getArticleData } from "../../../api/article"
import React, { useEffect, useState } from "react"
import { Response, StatusCode } from "../../../utils/api/response/type"
import { SvgIcon } from "../SvgIcon/SvgIcon"
import { ClassNameBuilder } from "../../../utils/style"
import { Article } from "../../../type/article"
import { EventCommand, useToolBarEffect } from "./api/middleware/ToolBarEffect"
import { initData } from "./api/initToolBar"
import Template, { ChildrenProps } from "./api/middleware/ToolBarEffect/template"
export interface ToolBarProps {
    className?: string,
}

const _template: React.FC<ChildrenProps> = (props: ChildrenProps) => {
    return (<template></template>)
}

const toolBarData = initData()
/**
 * 使用flex、grid布局，ToolBar控件分normal、expend两个状态，默认为normal，点击expendBtn切换状态。
 * @returns 
 */
export const ToolBar: React.FC<ToolBarProps> = () => {
    const [article, setArticle] = useState(toolBarData.article)
    const [renderTemplate, setRenderTemplate] = useState(() => _template)
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
    const actions = toolBarData.actions
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
            setArticle(data as Article)
        })
    }, [articleId])
    
    useToolBarEffect.useHandle((e) => {
        const {sender, template} = e
        if (article !== null) setArticle(article)
        setRenderTemplate(() => template)
    })
    /* TODO: 若将来EventCommand枚举数量增多，则需要考虑将callback单独抽离 */
    useToolBarEffect.listen((e) => {
        const {command} = e
        if (command === EventCommand.CLOSE) {
            setRenderTemplate(() => _template)
        }
    })
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
    return (
        <div className={rootClassName}>
            <div className={containerClassName}>
                <div className={actionsClassName}>
                    {
                        actions.filter((actionItem => {
                            if (actionItem.fixed) return true
                            return isExpend
                        })).map((actionItem) => {
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
            <Template article={article} render={renderTemplate}/>
        </div>
    )
}