<template>
    <div class="bs">
        <h2>Child2</h2>
        <h3>{{msg}}</h3>
        <grand-child1></grand-child1>
    </div>
</template>
<script>
import GrandChild1 from '@/components/communicate/GrandChild1'
export default {
  name: 'Child2',

  props: ['title'],
  data () {
    return {
      msg: ''
    }
  },
  components: {
    GrandChild1
  },
  methods: {
    toParent () {
      this.$emit('getmsg', 'From Child2.vue')
    }
  },
  mounted () {
  }

}
</script>

<style scoped>
h3 { color: red; }
</style>
