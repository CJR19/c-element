import Message from "./Message.vue";
import type { App } from "vue";
import { createMessage, closeAll } from "./method";
Message.install = function (app: App) {
    app.component(Message.name, Message);
}
export default Message;
export  {
    createMessage,
    closeAll
}
export * from "./types";