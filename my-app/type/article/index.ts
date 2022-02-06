import { User } from "../user";
type ID = string | number
/* 文章标签 */
export interface ArticleTag {
    id: ID, // 表情名
    name: string, // 标签名
    addr?: string, // 来源（可选）
}

/* 文章整体结构 */
export interface Article {
    id: ID, // 文章id
    image: string, // 文章首图
    title: string, //文章标题
    content: string, //文章内容
    tags: ArticleTag[], // 文章标签
    comment: number, // 评论数
    like: {
        value: number, //点赞数
        isDone: boolean //是否已点赞
    }, // 点赞数
    share: number // 分享数
}

/* 三连: 分享、评论、点赞 */
export interface BTC {
    share?: number,
    comment?: number,
    like: number
}

/* 文章评论 */
export interface ArticleComment {
    id: ID, // 评论id
    type: number, // 评论类型，是文字还是语音
    user: User, // 用户
    btc: BTC,// 三连: 分享、评论、点赞
    content: string
}

/* 二级评论 */
export interface SecondaryComment {
    id: ID, // 二级评论id
    rootId: ID, // 一级评论的id
    preComment: SecondaryComment | null, // 对谁的二级评论
    btc: BTC,
    user: User,
    content: string
}