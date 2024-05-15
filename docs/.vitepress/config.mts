import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/ddemo/",
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
          {text:'交换机配置远程登陆',link:'/计算机网络/思科模拟器/01_交换机配置远程登录'},
          {text:'交换机配置vlan',link:'/计算机网络/思科模拟器/02_交换机配置VLAN'},
          {text:'生成树协议与快速生成树协议',link:'/计算机网络/思科模拟器/03_生成树协议与快速生成树协议'},
          {text:'交换机端口聚合',link:'/计算机网络/思科模拟器/04_交换机端口聚合'},
          {text:'路由器基本配置与单臂路由',link:'/计算机网络/思科模拟器/07_路由器基本配置与单臂路由'},
          {text:'路由器静态路由',link:'/计算机网络/思科模拟器/08_路由器静态路由'},
          {text:'路由器RIP动态路由',link:'/计算机网络/思科模拟器/09_路由器RIP动态路由'},
          {text:'路由器OSPF动态路由',link:'/计算机网络/思科模拟器/70_路由器OSPF动态路由'},
        ]
      }
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/CNas_J' }  
    ]
  }
})
