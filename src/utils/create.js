import Vue from 'vue'

// 创建指定实例并挂载到body上
export default function create (Component, props) {
  const vm = new Vue({
    render (h) {
      return h(Component, { props })
    }
  }).$mount()

  document.body.appendChild(vm.$el)
  const comp = vm.$children[0]
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }

  return comp
}
