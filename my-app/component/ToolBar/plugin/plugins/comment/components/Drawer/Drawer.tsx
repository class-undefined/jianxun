import { useEffect, useState } from "react"
import { SecondaryComment } from "../../SecondaryComment/SecondaryComment"
import { SecondaryApi } from "../CommentAction/handle"

export const Drawer = () => {
    const Hidden = <template />
    const [Template, setTemplate] = useState(Hidden)
    useEffect(() => {
        SecondaryApi.useHandle(articleComment => {
            setTemplate(<SecondaryComment comment={articleComment}/>)
        })
        return () => SecondaryApi.clear()
    })
    return Template
}