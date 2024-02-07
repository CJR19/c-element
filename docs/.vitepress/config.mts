import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import  demoContainer  from '../utils/demoContainer'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CJr Blog",
  description: "CJr Blog",
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('../../src', import.meta.url))
        },
        // 覆盖vitepress默认的组件
        {
          find: /^.*\/VPHomeHero\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/CustomVPHomeHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPHomeFeatures\.vue$/,
          replacement: fileURLToPath(
            new URL('../components/CustomVPHomeFeatures.vue', import.meta.url)
          )
        },
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(demoContainer)
    },
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'material-theme-ocean'
    // }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'C-Element', link: '/pages/c-element-ui/style/color' },
      { text: '前端知识笔记', link: '/pages/front-end/html_css/浏览器渲染原理' },
      { text: 'Examples', link: '/api-examples' },
    ],
    sidebar: {
      'pages/c-element-ui/': [
        {
          text: 'C-Element UI',
          collapsed: false,
          items: [
            {
              text: '风格与样式',
              collapsed: false,
              items: [
                { text: 'Color 颜色', link: '/pages/c-element-ui/style/color' },
                { text: 'Spacing 间距', link: '/pages/c-element-ui/style/spacing' },
                { text: 'Shadows 阴影', link: '/pages/c-element-ui/style/shadows' },
              ]
            },
            {
              text: 'Vue 组件',
              collapsed: false,
              items: [
                { text: 'Button 按钮', link: '/pages/c-element-ui/vue-components/button' },
                { text: 'Alert 提示', link: '/pages/c-element-ui/vue-components/alert' },
                { text: 'Collapse 折叠面板', link: '/pages/c-element-ui/vue-components/collapse' },
                { text: 'Dropdown 下拉菜单', link: '/pages/c-element-ui/vue-components/dropdown' },
                { text: 'Message 消息', link: '/pages/c-element-ui/vue-components/message' },
                { text: 'Input 文字输入', link: '/pages/c-element-ui/vue-components/input' },
                { text: 'Switch 开关', link: '/pages/c-element-ui/vue-components/switch' },
                { text: 'Select 选择器', link: '/pages/c-element-ui/vue-components/select' },
                { text: 'Form 表单', link: '/pages/c-element-ui/vue-components/form' },
                { text: 'Loading 加载', link: '/pages/c-element-ui/vue-components/loading' },
              ]
            },
            {
              text: 'Vue 指令'
            },
          ]
        },
      ],
      'pages/front-end/':[
        {
          text: '前端知识笔记',
          collapsed: false,
          items: [
            { 
              text: 'HTML&CSS', 
              collapsed: true,
              items: [
                {text: '浏览器渲染原理', link: '/pages/front-end/html_css/浏览器渲染原理'},
              ]
            },
            { 
              text: 'JavaScript', 
              collapsed: true,
              items: [
                {text: '01-事件循环', link: '/pages/front-end/javascript/01-事件循环'},
                {text: '02-this指向', link: '/pages/front-end/javascript/02-this指向'},
                {text: '03-Promise' , link: '/pages/front-end/javascript/03-Promise'},
                {text: '04-防抖' , link: '/pages/front-end/javascript/04-防抖'},
                {text: '05-节流' , link: '/pages/front-end/javascript/05-节流'},
                {text: '06-变量声明' , link: '/pages/front-end/javascript/06-变量声明'},
                {text: '07-数据类型' , link: '/pages/front-end/javascript/07-数据类型'},
                {text: '08-循环迭代' , link: '/pages/front-end/javascript/08-循环迭代'},
                {text: '09-Proxy&Reflct' , link: '/pages/front-end/javascript/09-Proxy&Reflct'},
              ]
            },
            { text: 'CSS', link: '/pages/front-end/css' },
            { text: 'HTML', link: '/pages/front-end/html' },
            { 
              text: 'TypeScript', 
              collapsed: true,
              items: [
                {text: '01-什么是TypeScript', link: '/pages/front-end/typescript/01-什么是TypeScript'},
                {text: '02-安装TypeScript', link: '/pages/front-end/typescript/02-安装TypeScript'},
                {text: '03-起始', link: '/pages/front-end/typescript/03-起始'},
                {text: '04-原始数据类型', link: '/pages/front-end/typescript/04-原始数据类型'},
                {text: '05-任意值', link: '/pages/front-end/typescript/05-任意值'},
                {text: '06-类型推断', link: '/pages/front-end/typescript/06-类型推断'},
                {text: '07-联合类型', link: '/pages/front-end/typescript/07-联合类型'},
                {text: '08-对象类型-接口', link: '/pages/front-end/typescript/08-对象类型-接口'},
                {text: '09-数组类型', link: '/pages/front-end/typescript/09-数组类型'},
                {text: '10-函数类型', link: '/pages/front-end/typescript/10-函数类型'},
                {text: '11-类型断言', link: '/pages/front-end/typescript/11-类型断言'},
                {text: '12-声明文件', link: '/pages/front-end/typescript/12-声明文件'},
                {text: '13-内置对象', link: '/pages/front-end/typescript/13-内置对象'},
                {text: '14-类型别名', link: '/pages/front-end/typescript/14-类型别名'},
                {text: '15-字符串字面量类型', link: '/pages/front-end/typescript/15-字符串字面量类型'},
                {text: '16-枚举', link: '/pages/front-end/typescript/16-枚举'},
                {text: '17-类', link: '/pages/front-end/typescript/17-类'},
                {text: '18-类与接口', link: '/pages/front-end/typescript/18-类与接口'},
                {text: '19-泛型', link: '/pages/front-end/typescript/19-泛型'},
                {text: '20-声明合并', link: '/pages/front-end/typescript/20-声明合并'},
  
              ]
            },
            { 
              text: 'Vue',
              collapsed: true,
              items: [
                {
                  text: 'vuex',
                  collapsed: true,
                  items: [
                    {text: '基础', link: '/pages/front-end/vue/vuex/基础'}
                  ]
                },
                {text: 'pinia' , link: '/pages/front-end/vue/pinia/基础'},
              ]
            }, 
            { 
              text: 'Vue3',
              collapsed: true,
              items: [
                {text: '简介' , link: '/pages/front-end/vue3/1-vue3简介'},
                {text: '安装使用' , link: '/pages/front-end/vue3/2-创建vue3工程'},
                {text: 'setup', link: '/pages/front-end/vue3/3-setup'},
                {text: '响应式数据', link: '/pages/front-end/vue3/4-响应式数据'},
                {text: '计算属性', link: '/pages/front-end/vue3/5-计算属性'},
                {text: '侦听器', link: '/pages/front-end/vue3/6-侦听器'},
                {text: '生命周期', link: '/pages/front-end/vue3/7-生命周期'},
                {
                  text: '组件', 
                  collapsed: false,
                  items: [
                    {text: 'props', link: '/pages/front-end/vue3/8-1-props'},
                    {text: 'emit', link: '/pages/front-end/vue3/8-2-emit'},
                    {text: '组件 v-model', link: '/pages/front-end/vue3/8-3-组件v-model'},
                    {text: '插槽Slots', link: '/pages/front-end/vue3/8-4-插槽Slots'},
                    {text: '依赖注入', link: '/pages/front-end/vue3/8-5-依赖注入'},
                  ]
                },
                {text: '自定义hook', link: '/pages/front-end/vue3/9-自定义hook'},
                {text: '内置指令', link: '/pages/front-end/vue3/11-内置指令'},
                {text: '自定义指令', link: '/pages/front-end/vue3/12-自定义指令'},
                {text: '插件', link: '/pages/front-end/vue3/13-插件'},
                {text: '渲染函数', link: '/pages/front-end/vue3/14-渲染函数'},
                {
                  text: 'vue router',
                  collapsed: false,
                  items: [
                    {text: '介绍', link: '/pages/front-end/vue3/vue-router/10-0-路由v-router'},
                    {text: '基本使用', link: '/pages/front-end/vue3/vue-router/10-1-基本使用'},
                    {text: '路由器工作模式', link: '/pages/front-end/vue3/vue-router/10-2-路由器工作模式'},
                    {text: '嵌套路由', link: '/pages/front-end/vue3/vue-router/10-3-嵌套路由'},
                    {text: '路由传参', link: '/pages/front-end/vue3/vue-router/10-4-路由传参'},
                    {text: 'replace属性', link: '/pages/front-end/vue3/vue-router/10-5-replace属性'},
                    {text: '编程式导航', link: '/pages/front-end/vue3/vue-router/10-6-编程式导航'},
                    {text: '导航守卫', link: '/pages/front-end/vue3/vue-router/10-7-导航守卫'},
                    {text: '组合式API', link: '/pages/front-end/vue3/vue-router/10-8-组合式API'},
                    {text: '动态路由', link: '/pages/front-end/vue3/vue-router/10-9-动态路由'},
                  ]
                },
                {
                  text: 'vuex',
                  collapsed: false,
                  items: [
                    {text: '1-vuex初识', link: '/pages/front-end/vue3/vuex/1-vuex初识'},
                    {text: '2-安装', link: '/pages/front-end/vue3/vuex/2-安装'},
                    {text: '3-vuex应用', link: '/pages/front-end/vue3/vuex/3-vuex应用'},
                    {text: '4-State', link: '/pages/front-end/vue3/vuex/4-State'},
                    {text: '5-Getter', link: '/pages/front-end/vue3/vuex/5-Getter'},
                    {text: '6-Mutations', link: '/pages/front-end/vue3/vuex/6-Mutations'},
                    {text: '7-Actions', link: '/pages/front-end/vue3/vuex/7-Actions'},
                    {text: '8-Modules', link: '/pages/front-end/vue3/vuex/8-Modules'},
                  ]
                },
                {
                  text: 'pinia',
                  collapsed: false,
                  items: [
                    {text: '基础', link: '/pages/front-end/vue3/pinia/1-基础'},
                    {text: 'Store', link: '/pages/front-end/vue3/pinia/2-Store'},
                    {text: 'State', link: '/pages/front-end/vue3/pinia/3-State'},
                    {text: 'Getter', link: '/pages/front-end/vue3/pinia/4-Getter'},
                    {text: 'Action', link: '/pages/front-end/vue3/pinia/5-Action'},
                  ]
                },
                {
                  text: 'vue相关总结',
                  collapsed: false,
                  items: [
                    {text: '通信方式总结', link: '/pages/front-end/vue3/vue相关总结/通信方式总结'},
                    {
                      text: 'Vue3与Vue2的区别总结',
                      collapsed: false,
                      items: [
                        {text: '01-v-for中的Ref数组', link: '/pages/front-end/vue3/vue相关总结/Vue3与Vue2的区别总结/01-v-for中的Ref数组'},
                        {text: '02-异步组件', link: '/pages/front-end/vue3/vue相关总结/Vue3与Vue2的区别总结/02-异步组件'},
                        {text: '03-自定义指令', link: '/pages/front-end/vue3/vue相关总结/Vue3与Vue2的区别总结/03-自定义指令'},
                        {text: '04-侦听数组', link: '/pages/front-end/vue3/vue相关总结/Vue3与Vue2的区别总结/04-侦听数组'},
                      ]
                    },
                  ]
                }
              ]
            }, 
            {
              text: 'NodeJs',
              collapsed: true,
              items: [
                {text: '01-认识node', link: '/pages/front-end/nodejs/01-认识node'},
                {text: '02-node环境安装', link: '/pages/front-end/nodejs/02-node环境安装'},
                {text: '03-npm使用介绍', link: '/pages/front-end/nodejs/03-npm使用介绍'},
                {text: '04-NodeJs模块', link: '/pages/front-end/nodejs/04-NodeJs模块'},
                {text: '05-NodeJs包', link: '/pages/front-end/nodejs/05-NodeJs包'},
                {text: '06-文件系统', link: '/pages/front-end/nodejs/06-文件系统'},
                {text: '07-事件', link: '/pages/front-end/nodejs/07-事件'},
                {text: '08-Buffer', link: '/pages/front-end/nodejs/08-Buffer'},
                {text: '09-路径', link: '/pages/front-end/nodejs/09-路径'},
                {text: '10-Http模块-服务器', link: '/pages/front-end/nodejs/10-Http模块-服务器'},
                {text: '11-Http模块-路径分发', link: '/pages/front-end/nodejs/11-Http模块-路径分发'},
                {text: '12-处理POST和GET请求', link: '/pages/front-end/nodejs/12-处理POST和GET请求'},
              ]
            }
          ]
        },
      ],
      '/examples/': [
        {
          text: 'Examples',
          collapsed: true,
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
  
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
