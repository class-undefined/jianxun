import { ResultMessage as Type, StatusCode } from "./type"
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

    setData(_data: any) {
        this.data = _data
        return this
    }

    setCode(_code: StatusCode) {
        this.code = _code
        return this
    }

    setMessage(_message: string) {
        this.message = _message
        return this
    }

    Ok(_message: string | null | undefined) {
        const message = !_message ? Type.SUCCESS.DEFAULT_MESSAGE : _message
        return this.setCode(Type.SUCCESS.CODE).setMessage(message + '')
    }

    Error(_message: string | null | undefined) {
        const message = !_message ? Type.ERROR.DEFAULT_MESSAGE : _message
        return this.setCode(Type.ERROR.CODE).setMessage(message)
    }

    build() {
        return { code: this.code, message: this.message, data: this.data }
    }

    toJson() {
        return JSON.stringify(this.build())
    }
}
