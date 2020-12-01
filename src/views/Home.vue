<template>
  <div class="home">
    <h1 @click="$store.commit('edit', { age: 15, sex: '男' })">{{ $store.state.name }}</h1>
    <p>------------------------------------------</p>
    <communicate test='From Home.vue' ></communicate>
  </div>
</template>

<script>
import Communicate from '../components/communicate'

export default {
  name: 'Home',
  provide () {
    return {
      home: 'Home.vue',
      _data: this.baseSelf
    }
  },
  components: {
    Communicate
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
