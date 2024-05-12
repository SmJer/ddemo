import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "smueejer",
  description: "SmJer笔记站",
  themeConfig: {
      siteTitle:"Smueejer",
      logo:"1.jpg.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '博客',link:'/boke/yasina.md'},
      { text: '计算机网络', items:[
        {text:'网络基础',link:'/计算机网络/网络基础/'},
        {text:'思科模拟器',link:'/计算机网络/思科模拟器/'},
      ]
    }
    ],

    sidebar:{
      '/计算机网络/网络基础':{
        text:'计算机网络',
        items:[
          {text:'计算机网络基础1',link:'/计算机网络/网络基础/20240401-计算机网络基础'},
          {text:'计算机网络基础2',link:'/计算机网络/网络基础/20240403-计算机网络基础2'},
          {text:'计算机网络基础3',link:'/计算机网络/网络基础/20240407-计算机网络基础3'},
          {text:'计算机网络基础4',link:'/计算机网络/网络基础/20240408-计算机网络基础4'},
          {text:'计算机网络基础5',link:'/计算机网络/网络基础/20240410-计算机网络基础5'},
          {text:'计算机网络基础6',link:'/计算机网络/网络基础/20240411-计算机网络基础6'},
        ]
      },'/计算机网络/思科模拟器':{
        text:'计算机网络',
        items:[
          {text:'思科模拟器1',link:'/计算机网络/思科模拟器/20240412-思科模拟器'},
          {text:'思科模拟器2',link:'/计算机网络/思科模拟器/20240415-思科模拟器2'},
          {text:'思科模拟器3',link:'/计算机网络/思科模拟器/20240417-思科模拟器3'},
          {text:'思科交换机ssh配置',link:'/计算机网络/思科模拟器/20240418-思科交换机shh配置'},
          {text:'vlan的配置和管理',link:'/计算机网络/思科模拟器/20240419-vlan的配置和管理'},
          {text:'交换机的生成树协议',link:'/计算机网络/思科模拟器/20240422-交换机的生成树协议配置'},
          {text:'聚合和安全',link:'/计算机网络/思科模拟器/20240424-聚合和安全'},
          {text:'三层交换机',link:'/计算机网络/思科模拟器/20240425-三层交换机'},
          {text:'路由器',link:'/计算机网络/思科模拟器/20240426-路由器'},
          {text:'单臂路由',link:'/计算机网络/思科模拟器/20240428-单臂路由'},
          {text:'静态路由',link:'/计算机网络/思科模拟器/20240429-静态路由'},
          {text:'rip动态路由',link:'/计算机网络/思科模拟器/20240506-rip动态路由'},
          {text:'rip动态路由2',link:'/计算机网络/思科模拟器/20240508-rip动态路由2'},
          {text:'ospf动态路由',link:'/计算机网络/思科模拟器/20240509-ospf动态路由'},
          {text:'ospf动态路由注意事项',link:'/计算机网络/思科模拟器/20240510-ospf动态路由注意事项'},
        ]
      }
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/CNas_J' }  
    ]
  }
})
