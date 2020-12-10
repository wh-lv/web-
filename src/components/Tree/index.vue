<template>
  <div id="app">
    <ul>
      <item class="item" :model="treeData"></item>
    </ul>
  </div>
</template>

<script>
import Item from './item'
export default {
  components: { Item },
  data () {
    return {
      treeData: {
        title: 'web全栈架构师',
        children: [
          { title: 'Java架构师' },
          {
            title: 'JS高级',
            children: [{ title: 'ES6' }, { title: '动效' }]
          },
          {
            title: 'web全栈',
            children: [
              {
                title: 'Vue训练营',
                expand: true,
                children: [
                  { title: '组件化' },
                  { title: '源码' },
                  { title: 'docker部署' }
                ]
              },
              {
                title: 'React',
                children: [
                  { title: 'jsx' },
                  { title: '虚拟DOM' }
                ]
              },
              { title: 'Node' }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
