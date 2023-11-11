import Select from "./Select.vue";
import type { App } from "vue";
Select.install = function (app: App) {
    app.component(Select.name, Select);
};
export default Select;
export * from "./types";