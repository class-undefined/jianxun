import Mock from "mockjs";
import { ArticleComment, SecondaryComment } from "../../type/article";
import { createBTC } from "./btc";
import { createUser } from "./user";


export const createArticleComment = ():ArticleComment => {
    return {
        id: Mock.Random.id(),
        type: Mock.Random.pick([0, 1]), // 文字还是语音
        user: createUser(),
        btc: createBTC(),
        content: Mock.Random.cparagraph(), // 段落最多150字符
        
    }
}

/* mock 二级评论 */
export const createSecondaryComment = (): SecondaryComment => {
    return {
        id: Mock.Random.id(),
        rootId: Mock.Random.id(),
        btc: createBTC(),
        preComment: null,
        user: createUser(),
        content: Mock.Random.cparagraph()
    }
}