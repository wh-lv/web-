import Vue from 'vue'

// 创建指定组件实例并挂载于body上
export default function create (Component, props) {
  // 创建 vue 实例
  const vm = new Vue({
    render (h) {
      // render方法提供了一个 h 函数，可以渲染 VNode
      console.log(h(Component, { props }))
      return h(Component, { props })
    }
  }).$mount() // 执行挂载函数，但未指定挂载目标，表示只执行初始化工作

  // 上面 vm 帮我们创建实例
  // 通过 $children 获取实例
  console.log('vm.$root: ', vm.$root)
  const comp = vm.$children[0]
  // 追加至 body
  document.body.appendChild(vm.$el)
  // 给组件实例添加销毁函数
  comp.remove = () => {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }
}
