import Vue from 'vue'
import App from './App.vue'
import router from './router/krouter.js'
import store from './store'
import Bus from './utils/bus'

Vue.prototype.$bus = new Bus()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
