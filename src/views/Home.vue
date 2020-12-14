<template>
  <div class="home">
    <!-- <communicate test='From Home.vue' ></communicate> -->
    <!-- <solt-demo></solt-demo> -->
    <!-- <form-test></form-test> -->
    <!-- <node :data="{
      id: 1,
      title: '第一级标题',
      children: [
        {
          id: 2,
          title: '第二级标题',
          children: [{ id: 3, title: '第三级标题' }]
        }
      ]
    }"></node> -->
    <!-- <tree></tree> -->
    <h1>首页</h1>
    <router-view></router-view>
    <comp></comp>
    <vuex-test></vuex-test>
  </div>
</template>

<script>
// import Communicate from '../components/communicate'
// import SoltDemo from '../components/slots'
// import FormTest from '../components/form'
// import Node from '../components/Tree/Node'
// import Tree from '../components/Tree/index'
import VuexTest from './VuexTest.vue'

export default {
  name: 'Home',
  provide () {
    return {
      home: 'Home.vue',
      _data: this.baseSelf
    }
  },
  components: {
    // Communicate,
    // SoltDemo,
    // FormTest,
    // Node,
    // Tree,
    VuexTest
  },
  data () {
    return {
      tua: 'Tua',
      baseSelf: this
    }
  },
  mounted () {
    console.log('name: ', this.$store.state.name)
  },
  methods: {
    onFoo () {
      console.log('Foo')
    }
  }
}
</script>
