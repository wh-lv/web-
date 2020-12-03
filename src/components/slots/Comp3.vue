<template>
  <div>
    <slot foo='foo' bar='bar'></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      foo: 'foo',
      bar: 'bar'
    }
  }
}
</script>

<style>

</style>
