// kvue-router.js
let Vue
class VueRouter {
  constructor (options) {
    this.$options1 = options
    this.routeMap = {}
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
  }

  // 绑定事件
  init () {
    this.bindEvents()
    this.createRouteMap(this.$options1)
    this.initComponent()
  }

  bindEvents () {
    window.addEventListener('load', this.onHashChange.bind(this), false)
    window.addEventListener('hashchange', this.onHashChange.bind(this), false)
  }

  // 路由映射表
  createRouteMap (options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item
    })
  }

  initComponent () {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        // return <a href={this.to}>{this.$slots.default}</a>
        return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
      }
    })
    Vue.component('router-view', {
      render: h => {
        var component = this.routeMap[this.app.current].component
        return h(component)
      }
    })
  }

  // 设置当前路径
  onHashChange () {
    this.app.current = window.location.hash.slice(1) || '/'
  }
}
// 插件逻辑
VueRouter.install = function (_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      console.log('this: ', this)
      if (this.$options.router) {
        console.log('this.$options.router: ', this.$options.router)
        console.log('root this: ', this)
        // 确保是根组件时执⾏⼀次，将router实例放到Vue原型，以后所有组件实例就均有$router
        Vue.prototype.$router = this.$options.router
        this.$options.router.init()
      }
    }
  })
}

export default VueRouter
