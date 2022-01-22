import { ToolBarModal } from "../../../component/ToolBar/components/ToolBarModal/ToolBarModal"
import { ClassNameBuilder } from "../../../utils/style"

export const styleExample = () => {
    /* 创建一个className控制器，方便当元素被点击时转化样式 */
    console.group("styleExample")
    const parentClassController = ClassNameBuilder.from(["parent", "parent-active"]).build()
    const clicked = false // 模拟单击状态
    console.log("normalClassName:", parentClassController(clicked)) // normal: className="parent"
    console.log("clickedClassName:", parentClassController(!clicked)) // active: className="parent parent-active"
    console.groupEnd()
}