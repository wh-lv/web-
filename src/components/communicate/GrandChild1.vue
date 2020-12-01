<template>
  <div class="bs">
    <h2>Grandson1</h2>
    <p>祖先元素提供的数据 : {{woniu}}</p>
    <h3>{{msg}}</h3>
  </div>
</template>
<script>
export default {
  name: 'GrandChild1',
  data () {
    return {
      msg: ''
    }
  },
  inject: ['woniu'],
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
