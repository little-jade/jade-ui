import DefaultTheme from 'vitepress/theme'
import Jaui from '../../../src/index'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
      app.use(Jaui)
  }
}