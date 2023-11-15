import TabPanels from "./TabPanels.vue";
import TabPanel from "./TabPanel.vue";
import type { App } from "vue";
TabPanels.install = function (app: App) {
    app.component(TabPanels.name, TabPanels);
};
TabPanel.install = function (app: App) {
    app.component(TabPanel.name, TabPanel);
};
export default TabPanels;
export { TabPanel };
export * from "./types";