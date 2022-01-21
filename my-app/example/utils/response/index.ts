import { Result } from "../../../utils/api/response"
import { StatusCode } from "../../../utils/api/response/type"

export const responseExample = () => {
    const bar = Result.create().Ok("操作成功!").setData({user: "admin"}).build() // 构建成功数据
    const foo = Result.create().Error("StackOverFlow").setData({result: "bad!"}).build() // 构建失败数据
    const baz = Result.create().setCode(StatusCode.Example).setMessage("示例").setData({text: "hello"}).build()
    const qux = Result.create().Ok("done").build() // 若不设置data，则方法的data为空
    console.group("responseExample")
    console.log(bar, foo, baz, qux)
    console.groupEnd()
}