<template>
  <div>
    <h2>商品详情</h2>
    <!-- $route.params.id -->
    <p>ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  mounted () {
    console.log('this.$route.matched: ', this.$route.matched)
  }
}
</script>

<style>

</style>
