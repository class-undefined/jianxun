interface StatusObject {
    CODE: number,
    DEFAULT_MESSAGE: string
}
interface ResultCodeType {
    [STATUS: string]: StatusObject
}

export const ResultCode: ResultCodeType = {
    SUCCESS: { CODE: 20000, DEFAULT_MESSAGE: '操作成功~' },
    ERROR: { CODE: 20001, DEFAULT_MESSAGE: '处理失败...' },
}