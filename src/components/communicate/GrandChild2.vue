<template>
    <div class="bs">
        <h2>Grandson2</h2>
        <p>
            祖先元素提供的数据 : {{woniu}}
        </p>
        <button @click="eventBus">$bus发布</button>
        <h3>{{msg}}</h3>
        <h4>{{ this.$store.getters.fullInfo }}</h4>
        <grand-grand-child1></grand-grand-child1>
    </div>
</template>
<script>
import GrandGrandChild1 from '@/components/communicate/GrandGrandChild1'

export default {
  name: 'GrandChild2',

  components: { GrandGrandChild1 },
  inject: ['woniu'],
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    eventBus () {
      this.$bus.$emit('event-bus', '测试eventBus')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
h3 { color: red; }
</style>
