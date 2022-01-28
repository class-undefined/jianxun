import Mock from "mockjs";
import { ArticleComment } from "../../type/article";

export const createArticleComment = ():ArticleComment => {
    return {
        id: Mock.Random.id(),
        type: Mock.Random.pick([0, 1]),
        user: {
            id: Mock.Random.id(),
            nick: Mock.Random.cname(),
            avatar: Mock.Random.image("150x150"),
        },
        btc: {
            comment: Mock.Random.integer(0, 100000),
            like: Mock.Random.integer(0, 100000),
            share: Mock.Random.integer(0, 100000)
        },
        content: Mock.Random.cparagraph() // 段落最多150字符
    }
}