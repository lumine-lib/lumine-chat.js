import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Lumine Chat',
  description: 'Satu library untuk semua chat platform.',
  themeConfig: {
    nav: [
      { text: 'Panduan', link: '/guide/getting-started' },
      { text: 'API', link: '/api/index' },
      { text: 'GitHub', link: 'https://github.com/lumine-lib/lumine-chat.js' }
    ],
    sidebar: {
      '/guide/': [
        { text: 'Memulai', link: '/guide/getting-started' },
        { text: 'Platform', link: '/guide/platform' },
      ],
      '/api/': [
        { text: 'API Reference', link: '/api/index' }
      ],
    }
  }
});