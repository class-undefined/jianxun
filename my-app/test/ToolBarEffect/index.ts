import { TestToolBarEffect } from "../../example/ToolBarModal"

export const ToolBarEffectTest = () => {
    // TestToolBarEffect("123123132") // 如果取消注释，则触发生命周期调用检查
    setTimeout(()=>{
        TestToolBarEffect("123123132")
    }, 1000)
    setTimeout(()=>{
        TestToolBarEffect("111")
    }, 2000)

}