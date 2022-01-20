export interface StatusObject {
    CODE: StatusCode,
    DEFAULT_MESSAGE: string
}
export interface ResultCodeType {
    [STATUS: string]: StatusObject
}

export enum StatusCode {
    SUCCESS=20000, // 成功
    ERROR=20001 // 失败
}

export interface Response {
    code: number,
    message: string | null,
    data: any
}

export const ResultMessage: ResultCodeType = {
    SUCCESS: { CODE: StatusCode.SUCCESS, DEFAULT_MESSAGE: '操作成功~' },
    ERROR: { CODE: StatusCode.ERROR, DEFAULT_MESSAGE: '处理失败...' },
}