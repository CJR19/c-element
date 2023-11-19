import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import CElement from './index'

// fontawesome 图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons' // 品牌图标
import { far } from '@fortawesome/free-regular-svg-icons' // 空心图标

library.add(fas)
library.add(fab)
library.add(far)



createApp(App).use(CElement).mount('#app')
