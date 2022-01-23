/**
 * @author: 野漫横江
 */
import mitt, {Emitter} from "mitt";
import React from "react";
import { Article } from "../../../../type/article";
import Template from "./template"
interface HandlerData {
    sender: string, // 事件发送者
    component: JSX.Element, // 发送数据
    article: Article | null
}


type EventType = {
    render: HandlerData
}

/**
 * 用于通知ToolBar进行渲染指定组件
 */
export class ToolBarEffect {
    private static emitter: Emitter<EventType> = mitt<EventType>() // 事件发送器

    private static article: Article | null = null

    private static isRegister = false

    private constructor() {
        throw new Error("为了避免事件全局污染，ToolBarEffect构造函数已被禁用，禁止调用。")
    }

    /**
     * 监听渲染事件
     * @param article 文章数据
     * @param callback 处理更新消息的回调函数
     */
    public static useHandle(article: Article, callback: (e: HandlerData) => void) {
        this.isRegister = true
        this.article = article
        this.emitter.off("render")
        this.emitter.on("render", callback)
    }

    /**
     * 通知ToolBar进行渲染传递过来的组件
     * @param sender 消息发送者身份
     * @param callback 返回需要对ToolBar进行更新的回调函数
     */
    public static render(sender: string, callback: (article: Article) => React.FC ) {
        if (this.isRegister === false) throw new Error("监听函数在ToolBar组件中尚未注册运行，调用该函数的生命周期过早！");
        const Children = callback(this.article as Article)
        const F = <Template children={<Children/>}/>  
        this.emitter.emit("render", {sender, component: F, article: this.article})
    }
}
