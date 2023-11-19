import Button from "./components/Button";
import Collapse, { CollapseItem } from "./components/Collapse";
import Message, { createMessage,closeAll as closeMessageAll } from "./components/Message";
import Alert from "./components/Alert";
import Dropdown from "./components/Dropdown/Dropdown.vue";
import Form, { FormItem } from "./components/Form";
import Icon from "./components/Icon";
import Input from "./components/Input";
import Select from "./components/Select";
import Switch from "./components/Switch";
import Tab, {Tabs} from "./components/Tabs";
import Tooltip from "./components/Tooltip";
import TabPanels, {TabPanel} from "./components/TabPanels";
import RenderVnode from './components/Common/RenderVnode'


import type { App } from "vue";

import './styles/index.scss'

// fontawesome 图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons' // 品牌图标
import { far } from '@fortawesome/free-regular-svg-icons' // 空心图标

library.add(fas)
library.add(fab)
library.add(far)

const components = [
    Button,
    Collapse,
    CollapseItem,
    Message,
    Alert,
    Dropdown,
    Form,
    FormItem,
    Icon,
    Input,
    Select,
    Switch,
    Tab,
    Tabs,
    Tooltip,
    TabPanels,
    TabPanel,
    RenderVnode

]    

const install = function (app: App) {
    components.forEach(component => {
        app.component(component.name, component);
    });
}

export {
    install,
    Button,
    Collapse,
    CollapseItem,
    Message,
    Alert,
    Dropdown,
    Form,
    FormItem,
    Icon,
    Input,
    Select,
    Switch,
    Tab,
    Tabs,
    Tooltip,
    TabPanels,
    TabPanel,
    createMessage,
    closeMessageAll,
    RenderVnode
}

export default {
    install
}