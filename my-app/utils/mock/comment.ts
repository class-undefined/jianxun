import Mock from "mockjs";
import { ArticleComment } from "../../type/article";

export const createArticleComment = ():ArticleComment => {
    return {
        id: Mock.Random.id(),
        type: Mock.Random.pick([0, 1]), // 文字还是语音
        user: {
            id: Mock.Random.id(),
            nick: Mock.Random.cname(),
            avatar: Mock.Random.image("150x150", '#894FC4', '#FFF'),
        },
        btc: {
            comment: Mock.Random.integer(0, 100000),
            like: Mock.Random.integer(0, 100000),
            share: Mock.Random.integer(0, 100000)
        },
        content: Mock.Random.cparagraph(), // 段落最多150字符
        
    }
}