<template>
  <div class="home">
    <!-- <communicate test='From Home.vue' ></communicate> -->
    <!-- <solt-demo></solt-demo> -->
    <form-test></form-test>
  </div>
</template>

<script>
// import Communicate from '../components/communicate'
// import SoltDemo from '../components/slots'
import FormTest from '../components/form'

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
    FormTest
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
