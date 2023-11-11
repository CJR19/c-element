import CollapseItem from "./CollapseItem.vue";
import Collapse from "./Collapse.vue";
import type { App } from "vue";
Collapse.install = function (app: App) {
    app.component(Collapse.name, Collapse);
};
CollapseItem.install = function (app: App) {
    app.component(CollapseItem.name, CollapseItem);
}    
export default Collapse;
export { CollapseItem };
export * from "./types";
