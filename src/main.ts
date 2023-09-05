import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'

// fontawesome 图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)


createApp(App).mount('#app')
