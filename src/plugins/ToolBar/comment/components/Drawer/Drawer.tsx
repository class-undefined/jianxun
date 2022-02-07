import { useEffect, useState } from "react"
import { SComment } from "../../SComment/SComment"
import { SecondaryApi } from "../CommentAction/handle"

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