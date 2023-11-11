import Tab from "./Tab.vue";
import Tabs from "./Tabs.vue";
import type { App } from "vue";
Tab.install = function (app:App) {
    app.component(Tab.name, Tab);
};
Tabs.install = function (app:App) {
    app.component(Tabs.name, Tabs);
};
export default Tab;
export {
    Tabs
}
export * from "./types";