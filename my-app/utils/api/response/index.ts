/**
 * @author: 野漫横江
 */
import { ResultMessage, StatusCode, Response } from "./type"
/**
 * 用于链式调用构建Response
 * @example
 * const response = Result.create().setCode(StatusCode.SUCCESS).setMessage("请求成功").setData(null).build()
 * response {
 *     code: 20001,
 *     message: "请求成功",
 *     data: null
 * }
 */
export class Result {
    private code: StatusCode | null
    private data: any
    private message: string | null
    constructor() {
        this.code = null
        this.data = null
        this.message = null
    }

    static create() {
        return new Result()
    }

    public setData(_data: any): Result {
        this.data = _data
        return this
    }

    public setCode(_code: StatusCode): Result {
        this.code = _code
        return this
    }

    public setMessage(_message: string): Result {
        this.message = _message
        return this
    }


    public Ok(_message: string | null | undefined): Result {
        const message = !_message ? ResultMessage.SUCCESS.DEFAULT_MESSAGE : _message
        return this.setCode(ResultMessage.SUCCESS.CODE).setMessage(message + '')
    }

    public Error(_message: string | null | undefined): Result {
        const message = !_message ? ResultMessage.ERROR.DEFAULT_MESSAGE : _message
        return this.setCode(ResultMessage.ERROR.CODE).setMessage(message)
    }

    public build(): Response {
        if (this.code === null || this.message === null) throw Error("构建错误，状态码或消息不能为空")
        return { code: this.code, message: this.message, data: this.data }
    }

    public toJson(): string {
        return JSON.stringify(this.build())
    }
}
