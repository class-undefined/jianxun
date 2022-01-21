/* 文章标签 */
export interface ArticleTag {
    id: string | number, // 表情名
    name: string, // 标签名
    addr?: string, // 来源（可选）
}

/* 文章整体结构 */
export interface Article {
    id: string | number, // 文章id
    image: string, // 文章首图
    title: string, //文章标题
    content: string, //文章内容
    tags: ArticleTag[], // 文章标签
    comment: {
        value: number, // 评论数
        isDone: boolean // 是否已评论
    }, // 评论数
    like: {
        value: number, //点赞数
        isDone: boolean //是否已点赞
    }, // 点赞数
    share: number // 分享数
}