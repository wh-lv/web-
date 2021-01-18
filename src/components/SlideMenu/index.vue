<template>
  <div id="app">
    <ul>
      <item
        class="item"
        v-for="route in permission_routes"
        :key="route.path"
        :base-path="route.path"
        :model="route"
      ></item>
    </ul>
  </div>
</template>

<script>
import Item from './item'
import { mapGetters } from 'vuex'
export default {
  name: 'SlideMenu',
  components: { Item },
  computed: {
    ...mapGetters(['permission_routes'])
  }
}
</script>

<style>

</style>
