/**
 * @author: 野漫横江
 */
import { service } from "../utils/api/service"
export const getArticleData = (data: {articleId: string}) => {
    return service({
        url: "/api/article",
        method: "POST",
        data
    })
}

export const geArticleComment = (data: {articleId: string}) => {
    return service({
        url: "/api/comment",
        method: "POST",
        data
    })
}