import Tooltip from "./Tooltip.vue";
import type { App } from "vue";
Tooltip.install = function (app:App) {
    app.component(Tooltip.name, Tooltip);
};
export default Tooltip;
export * from "./types";