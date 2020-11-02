module.exports={
    title: 'Blog Tech',
    // description: 'blog tech about technology around webapp,mobile, machine learning, data engine',
    themeConfig: {
        logo: 'images/logo.svg',
        nav: [
            {text: 'Home',link: '/'},
            {text:'HackerNoon',link:'/hackernoon/',items:[
                {text:'Tech',link:'/hackernoon/tech/'},
                {text:'SoftWare',link:'/hackernoon/software/'},

                {text:'Other',link:'/hackernoon/other/'}
                
            ]},
            {text: 'Guide',link: '/guide/'},
            
            {text: "Machine Learning",
                items:[
                    {text:"Computer vision",link:"https://machinelearningcoban.com"},
                    {text:"learn-anything",link:"https://learn-anything.xyz"
                }
                ]
            },
            {text: 'About me',link: 'https://github.com/vanhienfs'},
            
        ],
        sidebar: {
            '/guide/': [
              '',
              'frontend',
              'backend'
            ],
            '/hackernoon/tech/': ['',
            'python01']
            
          }
        

    },
    
    plugins: ['@vuepress/active-header-links']
}