<template>
    <div class="bs">
        <h2 @click="$parent.$emit('fromC2')">Child2</h2>
        <h3>{{msg}}</h3>
        <h4>{{ c2 }}</h4>
        <h4>{{ this.$store.getters.fullInfo }}</h4>
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
      msg: '',
      c2: 'c2'
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
