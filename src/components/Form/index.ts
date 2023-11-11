import FormItem from "./FormItem.vue";
import Form from "./Form.vue";
import type { App } from "vue";
FormItem.install = function (app: App) {
    app.component(FormItem.name, FormItem);
};
Form.install = function (app: App) {
    app.component(Form.name, Form);
};
export default Form;
export { FormItem };
export * from "./types";