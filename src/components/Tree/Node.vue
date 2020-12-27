<template>
  <div>
    <h3>{{ data.title }}</h3>
    <Node v-for="d in data.children" :key="d.id" :data="d"></Node>
  </div>
</template>

<script>
export default {
  name: 'Node',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
