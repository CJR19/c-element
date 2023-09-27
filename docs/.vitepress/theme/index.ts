import DefaultTheme from 'vitepress/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../../../src/styles/index.scss'
import './custom.css'
import CDemo from '../../components/c-demo.vue'

library.add(fas)

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('Demo',CDemo),
      app.provide('c-examples', import.meta.glob('../../examples/*/*.vue'));
    }
  }