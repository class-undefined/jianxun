import { service } from "../utils/api/service"
export const getArticleData = (articleId: string) => {
    return service({
        url: "/api/article",
        method: "POST",
        data: {articleId}
    })
}