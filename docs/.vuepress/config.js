module.exports = {
    title: '雪峰-ui框架',
    description: '一个雪峰开发的ui框架',
    themeConfig: {
        displayAllHeaders: true,// 默认值：false
        nav: [
          { text: '主页', link: '/' },
          { text: '文档', link: '/guide/' },
          { text: '交流', link: 'https://google.com' },
        ],
        sidebar: {
            '/':[
                {
                    title:"入门",
                    children:[
                        { title: '安装', path:'/install/'},
                        { title: '快速上手', path:'/quest/'},
                    ]
                },
                {
                    title:"组件",
                    path:'/components/',
                    children:[
                        { title: 'button组件', path:'/components/button.md'},
                        { title: 'toast组件', path:'/components/demoToast.md'},
                        { title: 'popover组件', path:'/components/demo-popover.md'},
                        { title: 'tabs组件', path:'/components/demo-tabs.md'},
                        { title: 'input组件', path:'/components/demo-input.md'},
                    ]
                }
            ],
            '/com':[
                {
                    title:"组件",
                    children:[
                        { title: '组件', path:'/components/'},
                    ]
                }
            ]
        }
      }
}