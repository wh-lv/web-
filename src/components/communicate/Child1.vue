<template>
  <div class="bs">
    <h2>Child1</h2>
    <p>{{title}}</p>
    <h3>{{msg}}</h3>
    <button @click="toParent">传递到父元素</button>
    <grand-child1></grand-child1>
    <grand-child2></grand-child2>
  </div>
</template>
<script>
import GrandChild1 from '@/components/communicate/GrandChild1'
import GrandChild2 from '@/components/communicate/GrandChild2'
export default {
  name: 'Child1',
  props: ['title'],
  components: { GrandChild1, GrandChild2 },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    toParent () {
      this.$emit('getmsg', 'From Child1.vue')
    }
  },
  mounted () {
    this.$bus.$on('event-bus', msg => {
      this.msg = '接收event-bus消息:' + msg
    })
  }
}
</script>

<style scoped>
h3 { color: red; }
</style>
