import { useEffect, useState } from "react"
import { SComment } from "../../SComment/SComment"
import { SecondaryApi } from "../CommentAction/handle"

/**抽屉，用于呼出二级评论页面 */
export const Drawer = () => {
    const Hidden = <template />
    const [Template, setTemplate] = useState(Hidden)
    useEffect(() => {
        SecondaryApi.useHandle(articleComment => {
            setTemplate(<SComment comment={articleComment}/>)
        })
        return () => SecondaryApi.clear()
    })
    return Template
}