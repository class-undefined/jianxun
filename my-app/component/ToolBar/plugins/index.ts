import { PluginConfig } from "../api/middleware/plugin";
import { ToolBarPluginType } from "../api/middleware/plugin/type";
import {Comment} from "./comment/Comment"
PluginConfig.use({type: ToolBarPluginType.COMMENT, plugin: (e) => Comment})