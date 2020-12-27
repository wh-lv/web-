<template>
  <div>
    <h3>Vuex</h3>
    <p>{{ $store.state.count }}</p>
    <p>{{ $store.getters.score }}</p>
    <button @click="add">Add</button>
    <button @click="asyncAdd">AsyncAdd</button>
  </div>
</template>

<script>
export default {
  methods: {
    add () {
      this.$store.commit('add', 2)
    },
    async asyncAdd () {
      const result = await this.$store.dispatch('asyncAdd')
      if (result.ok) {
        alert('Suceess')
      }
    }
  }
}
</script>

<style>

</style>
