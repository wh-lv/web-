import Vue from 'vue'
import App from './App.vue'
// import router from './router/krouter.js'
import router from './router/index.js'
// import store from './store'
import store from './store/kindex'
import Bus from './utils/bus'

Vue.prototype.$bus = new Bus()
Vue.config.productionTip = false

// <div id="box" class="foo"><span>aaa</span></div>
Vue.component('comp', {
  render (h) {
    return h('div', {
      // 接受一个字符串、数组、对象
      class: {
        foo: true,
        bar: false
      },
      attrs: {
        id: 'box'
      }
    }, [h('span', 'aaa')])
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
