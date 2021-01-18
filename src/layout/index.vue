<template>
  <div class="app-wrapper">
    <slide-menu class="sidebar-container"></slide-menu>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SlideMenu from '../components/SlideMenu/index.vue'
export default {
  components: { SlideMenu }
}
</script>
