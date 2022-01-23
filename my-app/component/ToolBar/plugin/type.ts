import { Article } from "../../../type/article";
import { MouseEvent } from "react";
export enum ToolBarPluginType {
    COMMENT="comment",
    LIKE="like",
    SHARE="share",
    ISSUE="issue",
    FAVORITE="favorite",
    VOICE="voice"
}

export interface ToolBarPlugin {
    type: ToolBarPluginType,
    plugin: (e:MouseEvent<HTMLDivElement>, article: Article) => JSX.Element
}