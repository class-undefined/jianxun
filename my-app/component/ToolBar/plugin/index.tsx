/**
 * @author: 野漫横江
 */
import { MouseEvent } from "react";
import { Article } from "../../../type/article";
import { ToolBarAction } from "../api/initToolBar";
import { ToolBarEffect } from "../api/ToolBarEffect";
import { ToolBarPlugin } from "./type";
/**
 * 将插件注册到ToolBar组件
 * @param actions ToolBar的控件
 * @param article 文章数据
 * @param plugin 需要注册的插件
 * @returns 
 */
const registerPlugin = (actions: ToolBarAction[], article: Article, plugin: ToolBarPlugin) => {
    const action = actions.find(action => action.type === plugin.type)
    if (action === undefined || article === null) return
    action.onClick = (e: MouseEvent<HTMLDivElement>) => {
        ToolBarEffect.render(plugin.type, plugin.plugin(e, article))
    }
}

/**
 * 批量将插件注册到ToolBar组件。
 * warning: 但是这样会导致一个问题，在切换文章时ToolBar由于变换了articleId，
 * useEffect会被触发导致article数据被改变，此时的article相当于是一份深拷贝数据
 * 猜测可能会导致插件获取到的article不会被更新。
 * @param actions ToolBar的控件
 * @param article 文章数据
 * @param plugins 需要注册的插件
 */
export const registerPlugins = (actions: ToolBarAction[], article: Article, plugins: ToolBarPlugin[]) => {
    for (const plugin of plugins) {
        registerPlugin(actions, article, plugin)
    }
}