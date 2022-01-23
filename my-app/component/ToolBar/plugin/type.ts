import React, { MouseEvent } from "react";
import { ChildrenProps } from "../api/ToolBarEffect/template";
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
    plugin: (e:MouseEvent<HTMLDivElement>) => React.FC<ChildrenProps>
}
