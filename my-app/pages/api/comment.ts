import type { NextApiRequest, NextApiResponse } from 'next'
import { Response } from '../../utils/api/response/type'
import { Result } from '../../utils/api/response/index'
import { ArticleComment, SecondaryComment } from '../../type/article'
import { createArticleComment, createSecondaryComment } from '../../utils/mock/comment'
const mockArticleCommentData = ():ArticleComment[] => {
    const size = 5
    const result = [] as ArticleComment[]
    for (let i = 0; i < size; i++) {
        result.push(createArticleComment())
    }
    return result
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    // if (req.method !== "POST") res.status(200).json(Result.create().Error('Request not allowed').build())
    res.status(200).json(Result.create().setData({comments: mockArticleCommentData()}).Ok(null).build())
}
