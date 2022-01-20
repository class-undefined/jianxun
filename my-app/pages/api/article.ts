import type { NextApiRequest, NextApiResponse } from 'next'
import { Response } from '../../utils/api/response/type'
import { Result } from '../../utils/api/response/index'
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    if (req.method !== "POST") res.status(200).json(Result.create().Error('Request not allowed').build())
    const data = {
        comment: 20,
        favorite: 10086,
        share: 10
    }
    res.status(200).json(Result.create().setData(data).Ok(null).build())
}
