import { getArticleData } from "../../../src/api/article"
import { StatusCode } from "../../../src/utils/api/response/type"
import { Response } from "../../../src/utils/api/response/type"
export const serviceExample = () => {
    
    const articleId = "test13213"
    getArticleData({articleId}).then((response: unknown) => {
        const { code, data, message } = response as Response // 统一接口类型
        if (code !== StatusCode.SUCCESS) {
            alert("error1")
            return
        }
        console.group("serviceExample")
        console.log(data)
        console.groupEnd()
        // handle data 进行数据处理
        
    })
    
} 