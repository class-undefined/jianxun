import { NextApiRequest, NextApiResponse } from "next"
import { ID, SecondaryComment } from "../../src/type/article"
import { Response } from '../../src/utils/api/response/type'
import { Result } from '../../src/utils/api/response/index'
import { createSecondaryComment } from "../../src/utils/mock/comment"
const mockSecondaryComment = (rootId: ID): SecondaryComment[] => {
    const size = 5
    const result = [] as SecondaryComment[]
    for (let i = 0; i < size; i++) {
        result.push(createSecondaryComment(rootId))
    }
    return result
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    const {rootId} = req.body
    res.status(200).json(Result.create().setData({comments: mockSecondaryComment(rootId)}).Ok(null).build())
}
