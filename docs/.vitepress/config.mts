import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Lumine Chat',
  description: 'Satu library untuk semua chat platform.',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Panduan', link: '/guide/getting-started' },
      { text: 'API', link: '/api/index' },
      { text: 'GitHub', link: 'https://github.com/lumine-lib/lumine-chat.js' }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Platform", link: "/guide/platform" }
          ]
        }
      ],

      "/api/": [
        {
          text: "API",
          items: [
            { text: "Overview", link: "/api/index" }
          ]
        }
      ]
    }
  }
});