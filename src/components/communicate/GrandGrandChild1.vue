<template>
  <div class="bs">
    <h2>GrandGrandson1</h2>
    <p>祖先元素提供的数据 : {{woniu}}</p>
    <h3>{{msg}}</h3>
    <h4>{{ this.$store.getters.fullInfo }}</h4>
    <button @click="$store.dispatch('aEdit', { name: 'jack', age: 18 })">Change</button>
  </div>
</template>
<script>
export default {
  name: 'GrandGrandChild1',
  inject: ['woniu'],
  data () {
    return {
      msg: ''
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
