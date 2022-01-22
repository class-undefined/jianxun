import type { NextApiRequest, NextApiResponse } from 'next'
import { Response } from '../../utils/api/response/type'
import { Result } from '../../utils/api/response/index'
import { Article } from '../../type/article'
const mockArticleData:Article = {
    id: "13215465163521",
    image: "https://www.baidu.com/",
    title: "我怎样才能做到？",
    content: "在生活中，在工作中，在学习中，你是否总是告诉自己“我做不到？”如果你保持着这样的局限性思维，那么它就会阻止你的大脑进行创造性的思考，因此就无法找到新方法让自己变得更好。所以我们应该有着“我怎样才能做到”的思维，激发大脑进行创造性思考，并提出更多建设性的意见，就能推动我们的成长和进步，同时，我们的心态也会更加的积极进取，而不是自怨自艾。",
    tags: [
        {id: "21341654", name: "炫酷脑科学"},
        {id: "21341655", name: "福报来了"},
    ],
    comment: 25,
    like: {
        value: 1608,
        isDone: false
    },
    share: 53
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    if (req.method !== "POST") res.status(200).json(Result.create().Error('Request not allowed').build())
    mockArticleData.id = req.body.articleId
    res.status(200).json(Result.create().setData(mockArticleData).Ok(null).build())
}
