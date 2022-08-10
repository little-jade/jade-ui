
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/jade-ui/',
  title: 'JadeUI',
  description: 'Just playing around.',
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
            { text: "button", link: "/component/button" },
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
  
  },
  markdown: {
    config: (md) => {

    }
  }
})
