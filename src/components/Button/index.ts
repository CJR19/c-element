import Button from "./Button.vue";
import type { App } from "vue"
Button.install = function (app: App) {
  app.component(Button.name, Button)
}
export default Button
export * from "./types"