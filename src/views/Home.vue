<template>
  <div class="home">
    <!-- <communicate test='From Home.vue' ></communicate> -->
    <solt-demo></solt-demo>
  </div>
</template>

<script>
// import Communicate from '../components/communicate'
import SoltDemo from '../components/slots'

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
    SoltDemo
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
