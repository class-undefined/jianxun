import { ToolBarModal } from "../component/ToolBar/components/ToolBarModal/ToolBarModal";
import { TestModal } from "../example/ToolBarModal";
import { Example } from "./example";
import { utilsTest } from "./utils";

utilsTest()
Example()
TestModal("123123132")
setTimeout(()=>{
    console.log(ToolBarModal._hash)
    TestModal("111")
    console.log(ToolBarModal._hash)
}, 2000)