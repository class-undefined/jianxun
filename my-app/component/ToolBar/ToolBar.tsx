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
import { ToolBarEffect } from "./api/ToolBarEffect"
export interface ToolBarAction {
    icon: string,
    content: string | number,
    fixed: boolean,
    onClick?: () => void
}
export interface ToolBarProps {
    className?: string,
}

const mockArticleData:Article = {
    id: "13215465163521",
    image: "https://www.baidu.com/",
    title: "我怎样才能做到？",
    content: "在生活中，在工作中，在学习中，你是否总是告诉自己“我做不到？”如果你保持着这样的局限性思维，那么它就会阻止你的大脑进行创造性的思考，因此就无法找到新方法让自己变得更好。所以我们应该有着“我怎样才能做到”的思维，激发大脑进行创造性思考，并提出更多建设性的意见，就能推动我们的成长和进步，同时，我们的心态也会更加的积极进取，而不是自怨自艾。",
    tags: [
        {id: "21341654", name: "炫酷脑科学"},
        {id: "21341655", name: "福报来了"},
    ],
    comment: 25,
    like: {
        value: 1608,
        isDone: false
    },
    share: 53
}

/**
 * 使用flex、grid布局，ToolBar控件分normal、expend两个状态，默认为normal，点击expendBtn切换状态。
 * @returns 
 */
export const ToolBar: React.FC<ToolBarProps> = () => {
    const [article, setArticle] = useState(mockArticleData)
    const [Template, setTemplate] = useState((<template></template>))
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
    const { comment, share } = article
    const like = article.like.value
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
            setArticle(data as Article)
        })
    }, [articleId])
    
    ToolBarEffect.useHandle(article, (e) => {
        const {sender, component, article} = e
        if (article !== null) setArticle(article)
        setTemplate(component)
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
            {Template}
        </div>
    )
}