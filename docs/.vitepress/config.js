
module.exports = {
    title: 'Hello VitePress',
    description: 'Just playing around.',
    base:"./",
    head:[
        ['link',
        {rel:'icon',href:"/favicon.ico"}
    ]
    ],
        // 主题配置
        themeConfig: {
          //   头部导航
          nav: [
              { text: '首页', link: '/' },
          ],
          //   侧边导航
          sidebar: [
              { text: 'micro-app-react', link: '/micro-app-react/' }
          ]
      }
  }