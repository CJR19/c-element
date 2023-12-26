import DefaultTheme from "vitepress/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../../../src/styles/index.scss";
import "./custom.css";
import CDemo from "../../components/c-demo.vue";
import { examplesKey } from "../../utils/symbolKey";
import CElement from "@/index";
import Layout  from '../../components/Layout.vue'
import Particles from "vue3-particles";
library.add(fas);



export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("Demo", CDemo),
    app.use(CElement),
    app.use(Particles),
    app.provide(examplesKey, import.meta.glob("../../examples/*/*.vue"));
  },
};

