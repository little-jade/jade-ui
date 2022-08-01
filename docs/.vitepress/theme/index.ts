import DefaultTheme from 'vitepress/theme'
import Jaui from '../../../src/index'
import '../../../src/theme/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
      app.use(Jaui)
  }
}
