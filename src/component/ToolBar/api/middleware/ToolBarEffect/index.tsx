/**
 * @author: 野漫横江
 */
import mitt, {Emitter} from "mitt";
import React from "react";
import { ToolBarPluginType } from "../plugin/type";
import { ChildrenProps } from "./template"
interface HandlerData {
    sender: string, // 事件发送者
    template: React.FC<ChildrenProps>, // 发送数据
}

export enum EventCommand {
    CLOSE, // 关闭窗口
}

interface EventData {
    command: EventCommand,
    payload?: any
}

type EventType = {
    render: HandlerData,
    command: EventData
}


/**
 * 用于通知ToolBar进行渲染指定组件
 */
export class useToolBarEffect {
    private static emitter: Emitter<EventType> = mitt<EventType>() // 事件发送器

    private static isHandle = false

    private static isListen = false

    private constructor() {
        throw new Error("为了避免事件全局污染，useToolBarEffect构造函数已被禁用，禁止调用。")
    }

    /**
     * 监听渲染事件
     * @param article 文章数据
     * @param callback 处理更新消息的回调函数
     */
    public static useHandle(callback: (e: HandlerData) => void) {
        useToolBarEffect.isHandle = true
        useToolBarEffect.emitter.off("render")
        useToolBarEffect.emitter.on("render", callback)
    }

    /**
     * 通知ToolBar进行渲染传递过来的组件
     * @param sender 消息发送者身份
     * @param callback 返回需要对ToolBar进行更新的回调函数
     */
    public static render(sender: ToolBarPluginType, template: React.FC<ChildrenProps> ) {
        if (useToolBarEffect.isHandle === false) throw new Error("监听函数在ToolBar组件中尚未注册运行，调用该函数的生命周期过早，需要等待至ToolBar组件渲染完成阶段后调用！");
        useToolBarEffect.emitter.emit("render", {sender, template})
    }

    /**
     * 监听事件消息发送，处理对应事件消息
     * @param callback 处理command事件的回调函数
     */
    public static listen(callback: (e: EventData) => void) {
        useToolBarEffect.isListen = true
        useToolBarEffect.emitter.off("command")
        useToolBarEffect.emitter.on("command", callback)
    }

    /**
     * 发送事件命令给command处理函数
     * @param command 事件命令
     */
    public static send(command: EventCommand, payload?:any) {
        if (useToolBarEffect.isListen === false) throw new Error("监听函数在ToolBar组件中尚未注册运行，调用该函数的生命周期过早，需要等待至ToolBar组件渲染完成阶段后调用！");
        useToolBarEffect.emitter.emit("command", {command, payload})
    }

}


// TODO: 是否缓存插件数据（即选择是否在ToolBar卸载控件）