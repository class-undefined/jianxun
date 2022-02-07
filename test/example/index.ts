import { responseExample } from "../../example/utils/response"
import { serviceExample } from "../../example/utils/service"
import { styleExample } from "../../example/utils/style"

export const Example = (isRun: boolean) => {
    if (!isRun) return // 是否执行示例
    responseExample() // 执行示例
    serviceExample()
    styleExample()
}