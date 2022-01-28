/**
 * @author: 野漫横江
 */
import { MouseEvent } from "react";
import { ToolBarAction } from "../../initToolBar";
import { useToolBarEffect } from "../ToolBarEffect";
import { ToolBarPlugin } from "./type";
export class PluginConfig {
    private constructor() {}

    private static plugins: ToolBarPlugin[] = []

    private static isRegist = false // 插件是否已完成注册

    /**
     * 查找plugins中是否含有与target相同type属性的plugins，预估数据量不超过10个，无需考虑时间复杂度，使用内置find。
     * @param target 欲查找的plugin
     * @returns ToolBarPlugin | undefined
     */
    private static find = (target: ToolBarPlugin) => {
        return PluginConfig.plugins.find(plugin => target.type === plugin.type)
    }

    /**
     * 将插件注册到ToolBar组件
     * 1. 生成action的onClick事件，该事件触发会发送render消息通知ToolBar渲染插件的React.FC
     * 2. 将该事件赋给action的onClick
     * @param actions ToolBar的控件
     * @param plugin 需要注册的插件
     * @returns 
     */
    private static registPlugin = (actions: ToolBarAction[], plugin: ToolBarPlugin) => {
        const action = actions.find(action => action.type === plugin.type)
        if (action === undefined || action === null) return
        action.onClick = (e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault()
            useToolBarEffect.render(plugin.type, plugin.plugin(e))
        }
        
        
    }

    /**
     * 支持链式调用，将插件挂载至ToolBar组件上
     * @param plugin 欲挂载插件
     * @returns 
     */
    public static use(plugin: ToolBarPlugin) {
        if (PluginConfig.find(plugin) !== undefined) throw new Error(`type: [${plugin.type}]，已经被配置过了，不可重复配置！`)
        PluginConfig.plugins.push(plugin)
        return PluginConfig
    }

    /**
     * 批量将插件注册到ToolBar组件。
     * @param actions ToolBar的控件
     */
    public static registerPlugins = (actions: ToolBarAction[]) => {
        if (PluginConfig.isRegist) throw new Error("registerPlugins方法只能调用一次，禁止非法调用registerPlugins。")
        PluginConfig.isRegist = true
        for (const plugin of PluginConfig.plugins) {
            PluginConfig.registPlugin(actions, plugin)
        }
    }

}