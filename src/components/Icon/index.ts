import Icon from "./Icon.vue";
import type { App } from "vue";
Icon.install = function (app: App) {
    app.component(Icon.name, Icon);
};
export default Icon;
export * from "./types";