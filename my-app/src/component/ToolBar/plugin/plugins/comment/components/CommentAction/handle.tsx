import mitt from "mitt";
import { ArticleComment } from "../../../../../../../type/article";

type EventType = {
    render: ArticleComment
}

export class SecondaryApi {
    private constructor() {}

    private static emitter = mitt<EventType>()

    public static clear() {
        SecondaryApi.emitter.off("render")
    }

    public static useHandle(callback: (e: ArticleComment) => void) {
        SecondaryApi.emitter.on("render", callback)
    }

    public static render(e: ArticleComment) {
        SecondaryApi.emitter.emit("render", e)
    }
}

export const onClickHandles = {
    share: (comment: ArticleComment) => {

    },
    comment: (comment: ArticleComment) => {
        SecondaryApi.render(comment)
    },
    like: (comment: ArticleComment) => {

    }
}
