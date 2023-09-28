import DefaultTheme from 'vitepress/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../../../src/styles/index.scss'
import './custom.css'
import CDemo from '../../components/c-demo.vue'
import { examplesKey } from '../../utils/symbolKey'

library.add(fas)

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('Demo',CDemo),
      app.provide(examplesKey, import.meta.glob('../../examples/*/*.vue'));
    }
  }