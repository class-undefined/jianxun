/**
 * @author: 野漫横江
 */
import { Result } from "../../utils/api/response"
import { StatusCode } from "../../utils/api/response/type"

export const utilsTest = (isRun: boolean) => {
    if (!isRun) return
    const response = Result.create()
        .setCode(StatusCode.SUCCESS)
        .setMessage("请求成功")
        .setData(null).build()
    console.assert(response.data === null && response.code === 20000 && response.message === "请求成功")
}