/**
 * @author: 野漫横江
 */
import { ID } from "../type/article"
import { service } from "../utils/api/service"
export const getArticleData = (data: {articleId: ID}) => {
    return service({
        url: "/api/article",
        method: "POST",
        data
    })
}

export const getArticleComment = (data: {articleId: ID}) => {
    return service({
        url: "/api/comment",
        method: "POST",
        data
    })
}

export const getSecondaryComment = (data: {rootId: ID}) => {
    return service({
        url: "/api/SecondaryComment",
        method: "POST",
        data
    })
}