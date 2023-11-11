import Button from "./components/Button";
import Collapse, { CollapseItem } from "./components/Collapse";
import Message, { createMessage,closeAll as closeMessageAll } from "./components/Message";
import Alert from "./components/Alert";
import Dropdown from "./components/Dropdown/Dropdown";
import Form, { FormItem } from "./components/Form";
import Icon from "./components/Icon";
import Input from "./components/Input";
import Select from "./components/Select";
import Switch from "./components/Switch";
import Tab, {Tabs} from "./components/Tabs";
import Tooltip from "./components/Tooltip";

import type { App } from "vue";

import './styles/index.scss'

// fontawesome 图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

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
    Tooltip

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
    createMessage,
    closeMessageAll
}

export default {
    install
}