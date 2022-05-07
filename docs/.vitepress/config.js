
module.exports = {
    title: '摸鱼日记',
    description: 'why not',
    head: [
        ['link',
            { rel: 'icon', href: "/favicon.ico" }
        ]
    ],
    // 主题配置
    themeConfig: {
        logo:"/logo.ico",
        //   头部导航
        nav: [
            { text: '主页', link: '/' },
            { text: 'react', items: [{ text: '自定义表单', link: '/react/#/custom-form/' }, { text: '自定义流程构造', link: '/react/#/custom-flow-design/' }] },
            { text: '关于', link: '/about/' },

        ],
    }
}