import { SecondaryComment } from "../../../type/article"

export const sc2comment = (scomment: SecondaryComment) => {
    const {id, rootId, user: {nick, avatar}, btc:{comment, like, share}, preComment} = scomment
    if (preComment !== null) throw new Error(`preComment不为空，是标准二级评论，不可转为一级评论格式`)
    return {
        id
    }
}