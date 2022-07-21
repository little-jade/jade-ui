import DefaultTheme from 'vitepress/theme'
import Jaui from '../../../src/index'
import '../../../src/theme/scss/bootstrap.scss'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
      app.use(Jaui)
      app.component('Demo', Demo)
      app.component('DemoBlock', DemoBlock)
  }
}
