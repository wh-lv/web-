<template>
  <div id="app">
    <h2>Parent</h2>
    <h2>{{test}}</h2>
    <h3>{{msg}}</h3>
    <child1 :title="title1" @getmsg="getmsg"></child1>
    <child-2 ref="c2"></child-2>
  </div>
</template>

<script>
import Child1 from '@/components/communicate/Child1'
import Child2 from '@/components/communicate/Child2'
export default {
  props: ['test'],
  name: 'app',
  provide: {
    woniu: '天地玄黄，宇宙洪荒'
  },
  components: { Child1, Child2 },
  data () {
    return {
      msg: '',
      title1: 'father box'
    }
  },
  mounted () {
    // 需要注意 $children 并不保证顺序，也不是响应式的
    this.$children[0].c1 = 'new c1'
    this.$refs.c2.c2 = 'new c2'
  },
  methods: {
    getmsg (msg) {
      this.msg = msg
    }
  }
}
</script>
<style scoped>
div {
  border: 3px blue solid;
  padding: 10px;
  display: inline-block;
  vertical-align: top;
}
h1,
h2 {
  font-size: 18px;
  margin: 5px 0;
}
h3 {
  color: red;
  font-size: 14px;
}
</style>
