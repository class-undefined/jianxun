/**
 * 进制转换
 * @param num 欲转化的数字
 * @param radix 转化进制 default: 2
 * @param n 保留多少位数 default = 0,为0即默认不补0
 * @returns 返回转化后的字符串
 */
export const baseConversion = (num: number, radix: number = 2, n: number = 0): string => {
    let s = num.toString(radix)
    if (n === 0) return s
    const diff = n - s.length
    if (diff < 0) throw new Error(`参数有误，转换后的位数大于所给出的n: ${n}`)
    for (let i = 0; i < diff; i++) {
        s = "0" + s
    }
    return s
}