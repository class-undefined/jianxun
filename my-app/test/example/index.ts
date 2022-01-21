import { responseExample } from "../../example/utils/response"
import { serviceExample } from "../../example/utils/service"
import { styleExample } from "../../example/utils/style"

export const Example = () => {
    const isExec = true // 是否执行示例
    if (!isExec) return
    responseExample() // 执行示例
    serviceExample()
    styleExample()
}