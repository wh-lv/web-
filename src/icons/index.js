import Vue from 'vue'
import Icon from '@/components/Icon.vue'
// 图标自动导入
// 利用 webpack 的 require.context 自动导入
// 返回的 req 是只加载 svg 目录中的模块的函数
const req = require.context('./svg', false, /\.svg$/) // 参数：路径、是否递归、匹配规则
console.log(req.keys())
req.keys().map(req)

Vue.component('Icon', Icon)
