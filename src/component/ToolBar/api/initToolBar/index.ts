import { MouseEvent } from "react"
import { Article } from "../../../../type/article"
import { PluginConfig } from "../middleware/plugin"
import { ToolBarPluginType } from "../middleware/plugin/type"
import "../../plugin/plugins" // 读取插件，初始化插件配置
export interface ToolBarAction {
    type: ToolBarPluginType,
    icon: string,
    content: string | number,
    fixed: boolean,
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

interface InitData {
    article: Article,
    actions: ToolBarAction[],

}

const article:Article = {
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

const actions: ToolBarAction[] = [
    {type: ToolBarPluginType.COMMENT, icon: 'comment', content: article.comment, fixed: true },
    {type: ToolBarPluginType.LIKE, icon: 'like', content: article.like.value, fixed: true },
    {type: ToolBarPluginType.SHARE, icon: 'share', content: article.share, fixed: true },
    {type: ToolBarPluginType.ISSUE, icon: 'issue', content: "反馈", fixed: false },
    {type: ToolBarPluginType.FAVORITE, icon: 'favorite', content: "收藏", fixed: false },
    {type: ToolBarPluginType.VOICE, icon: 'voice', content: "朗读", fixed: false }
]

export const initData = (): InitData => {
    /* 导入插件至actions */
    PluginConfig.registerPlugins(actions)
    return {
        article, actions
    }
}