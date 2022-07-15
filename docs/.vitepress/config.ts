
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    nav: [
      { text: 'component', link: '/component/card' },
      { text: 'guid', link: '/guid/start' }
    ],
    sidebar: {
      '/component/': [
        {
          text: 'component',
          items: [
            { text: 'card', link: '/component/card' },
            { text: "button", link: "/component/button" }
          ]
        }
      ],
      '/guid/': [
        {
          text: 'guid',
          items: [
            { text: 'start', link: '/guid/start' },
          ]
        }
      ]
    }
  
  }
})
